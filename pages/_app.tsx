import '../styles/global.css';
import { AppProps } from 'next/app';
import '../styles/prism-nord.css';
import '../styles/katex.min.css';

import 'primeflex/primeflex.css';

import 'primeflex/src/_variables.scss';
import 'primeflex/src/_grid.scss';
import 'primeflex/src/_formlayout.scss';
import 'primeflex/src/_display.scss';
import 'primeflex/src/_text.scss';
import 'primeflex/src/flexbox/_flexbox.scss';
import 'primeflex/src/_spacing.scss';
import 'primeflex/src/_elevation.scss';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import PrimeReact from 'primereact/utils';
PrimeReact.ripple = true;

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
