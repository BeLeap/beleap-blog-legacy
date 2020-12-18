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
import { Fieldset } from 'primereact/fieldset';

const cardFooter = (id) => {
    return (
        <div
            className="p-d-inline-flex p-flex-row-reverse"
            style={{ width: '100%' }}
        >
            <Link href={`/posts/${id}`}>
                <Button label="Read" />
            </Link>
        </div>
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
            <Fieldset legend="Articles">
                <div className="p-d-flex p-flex-column">
                    {allPostsData.map(({ id, date, title, summary }) => (
                        <Card
                            key={id}
                            title={title}
                            footer={cardFooter(id)}
                            style={{ marginBottom: '20px' }}
                        >
                            <br />
                            <SummaryArea>{summary}</SummaryArea>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </Card>
                    ))}
                </div>
            </Fieldset>
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
