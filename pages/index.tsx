import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const cardFooter = (id) => {
    return (
        <Link href={`/posts/${id}`}>
            <Button label="Read" />
        </Link>
    );
};

const SummaryArea = styled.div`
    color: gray !important;
`;

export default function Home({
    allPostsData,
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
        summary: string;
    }[];
}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Articles</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title, summary }) => (
                        <Card key={id} title={title} footer={cardFooter(id)}>
                            <br />
                            <SummaryArea>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: summary,
                                    }}
                                />
                            </SummaryArea>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </Card>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = await getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};
