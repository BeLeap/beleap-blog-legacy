import type { AppProps } from 'next/app';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/rhea/theme.css';
import '../styles/global.scss';
import '../styles/katex.min.css';
import '../styles/prism-nord.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
