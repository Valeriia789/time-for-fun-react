/* // X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in CoreUI

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... } */

// padding: ${p => p.theme.space[4]}px ${p => p.theme.space[6] + 4}px;

export const theme = {
  breakpoints: {
    mobile: '376px',
    tablet: '768px',
    desktop: '992px',
    largeDesktop: '1400px',
  },

  space: [ 6, 8, 12, 24,],

  borders: {
    none: 'none',
    normal: '',
    medium: '',
  },

  radii: {

  },

  shadows: {

  },

  fonts: {
    main: '',
    secondary: '',
  },

  fontSizes: {
    xxs: '',
    xs: '',
    s: '',
    m: '',
    l: '',
    xl: '',

    logo: '',
    heading: '',
  },

  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeights: {},

  letterSpacings: {},

  opacities: {},

  sizes: {},

  borderStyles: {},

  borderWidths: {},

  transitions: {},

  zIndices: {},

  colors: {
    white: '#FFFFFF',
    black: '#111111',

    componentBgc: 'rgba(25, 50, 25, 0.75)',

    textPrimary: 'rgb(215, 220, 195)',
    textSecondary: '',

    bgcPrimary: 'rgba(7, 14, 7, 0.75)',
    bgcSecondary: '',

    btnMain: '',
    btnAccent: '',
  },
};