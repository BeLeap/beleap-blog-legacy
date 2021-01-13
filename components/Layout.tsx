import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, index }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header index={index} />
      <main
        style={{
          margin: '10px',
          marginTop: '150px',
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
