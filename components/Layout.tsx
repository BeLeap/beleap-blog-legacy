import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, index }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header index={index} />
      <main
        style={{
          margin: '10px',
          marginTop: '130px',
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
