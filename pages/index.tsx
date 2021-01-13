// import Date from '../components/date';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import styled from 'styled-components';
import Header from '../components/Header';
import { getSortedPostsData } from '../lib/posts';

const cardFooter = (id: string) => {
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
    <>
      <Head>
        <title>BeLeap Blog</title>
      </Head>
      <Header />
      <div
        className="p-d-flex p-flex-column"
        style={{
          position: 'relative',
          top: '150px',
        }}
      >
        {allPostsData.map(({ id, date, title, summary }) => (
          <Card
            key={id}
            title={title}
            footer={cardFooter(id)}
            style={{ margin: '20px' }}
          >
            <br />
            <SummaryArea>{summary}</SummaryArea>
            <small>{/* <Date dateString={date} /> */}</small>
          </Card>
        ))}
      </div>
    </>
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
