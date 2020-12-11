import '../styles/global.css';
import { AppProps } from 'next/app';
import '../styles/prism-nord.css';
import '../styles/katex.min.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
