import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { SummarizerManager } from 'node-summarizer';
import util from 'util';

import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';
import math from 'remark-math';
import katex from 'rehype-katex';
import prism from 'remark-prism';
import gfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'posts');

interface postData {
    id: string;
    title: string;
    date: string;
    summary: string;
}

const summarize = async (content: string): Promise<string> => {
    const summarizer = new SummarizerManager(content, 1);
    const summary = await summarizer.getSummaryByRank();
    return summary.summary;
};

const makePostData = async (fileNames: string[]): Promise<postData[]> => {
    const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);
            const summary = await summarize(matterResult.content);

            const summarizedArticle = unified()
                .use(markdown)
                .use(math)
                .use(prism)
                .use(remark2rehype)
                .use(katex)
                .use(html)
                .processSync(summary)
                .toString();

            // Combine the data with the id
            return {
                id,
                summary: summarizedArticle,
                ...(matterResult.data as { date: string; title: string }),
            };
        }),
    );
    return allPostsData;
};

export const getSortedPostsData = async () => {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await makePostData(fileNames);
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = unified()
        .use(markdown)
        .use(math)
        .use(prism)
        .use(gfm)
        .use(remark2rehype)
        .use(katex)
        .use(html)
        .processSync(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string; title: string }),
    };
}
