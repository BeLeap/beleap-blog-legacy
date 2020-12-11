import '../styles/global.css';
import { AppProps } from 'next/app';
import '../styles/prism-nord.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
