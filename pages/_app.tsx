import '../styles/global.css';
import { AppProps } from 'next/app';
import 'prismjs/themes/prism-tomorrow.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
