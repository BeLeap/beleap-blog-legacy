import '../styles/global.css';
import { AppProps } from 'next/app';
import '../styles/prism-nord.css';
import '../styles/katex.min.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';

import PrimeReact from 'primereact/utils';
PrimeReact.ripple = true;

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
