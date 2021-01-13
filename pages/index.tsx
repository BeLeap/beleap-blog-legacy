// import Date from '../components/date';
import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';

const cardFooter = (id: string, date: string) => {
  return (
    <div className="p-d-inline-flex p-jc-between" style={{ width: '100%' }}>
      <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
      <Link href={`/posts/${id}`}>
        <Button label="Read" />
      </Link>
    </div>
  );
};

const SummaryArea = styled.div`
  color: gray !important;
`;

const Posts = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    summary: string;
  }[];
}) => {
  return (
    <Layout index={0}>
      <Head>
        <title>BeLeap Blog</title>
      </Head>
      <div className="p-d-flex p-flex-column">
        {allPostsData.map(({ id, date, title, summary }) => (
          <Card
            key={id}
            title={title}
            footer={cardFooter(id, date)}
            style={{ margin: '20px' }}
          >
            <br />
            <SummaryArea>{summary}</SummaryArea>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Posts;
