/* eslint-disable max-len */

export const colors = {
  brand: '#790030',
  lilac: '#9d7cbf',
  accent: '#ffb238',
  success: '#37b635',
  warning: '#ec1818',
  ui: {
    bright: '#e0d6eb',
    light: '#f5f3f7',
    whisper: '#fbfafc'
  },
  code: '#fcf6f0',
  gray: {
    dark: 'hsla(270, 17.119554496%, 0%, 0.92)',
    copy: 'hsla(270, 15.797828016000002%, 0%, 0.88)',
    calm: 'rgba(0, 0, 0, 0.54)'
  },
  white: '#fff',
  black: '#000'
}

export const fonts = {
  sansSerif: "'Roboto', sans-serif",
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace: "'Cascadia Code', monospace, monospace"
}

export const breakpoints = {
  xs: 345,
  sm: 670,
  md: 768,
  lg: 992,
  xl: 1200
}

export const widths = {
  md: 720,
  lg: 960,
  xl: 1140
}

export const dimensions = {
  fontSize: {
    regular: 16,
    large: 18
  },
  headingSizes: {
    h1: 2.441,
    h2: 1.953,
    h3: 1.563,
    h4: 1.25
  },
  lineHeight: {
    regular: 1.45,
    heading: 1.2
  },
  containerPadding: 1.5
}

export const heights = {
  header: 8
}

export const indrop = `
border-radius: 1.5rem;
background: #e0e0e0;
box-shadow: inset 0.5rem 0.5rem 1rem #bebebe, inset -0.5rem -0.5rem 1rem #ffffff;
`
export const outdrop = `
border-radius: 1.5rem;
background: #e0e0e0;
box-shadow: 0.5rem 0.5rem 1rem #bebebe, -0.5rem -0.5rem 1rem #ffffff;
`

export const nodrop = `
border-radius: 1.5rem;
background: #e0e0e0;
box-shadow: none;
`
