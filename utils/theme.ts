import { transparentize } from 'polished';
import { spacing } from './units';

const white = transparentize(0.75, '#fff');
const white75 = transparentize(0.5, '#fff');
const white50 = transparentize(0.25, '#fff');
const black50 = transparentize(0.75, '#000');
const black = '#111';
const yellow = '#F2CC23';
const yellowDarker = '#E3BF22';
const green = '#17A167';
const red = '#F96854';
const red75 = '#F96854';
const grey = '#B9B8B9';
// background
const blackDark = '#2D2F33';
const blackDarker = '#282A2E';
const blackDarkest = '#202225';
// button
const greyDark = '#494B50';
const grey10 = '#B9B8B9';
const grey100 = '#9E9E9E';
const redError = '#DB524E';

const palette = {
  common: {
    white,
    white75,
    white50,

    yellow,
    yellowDarker,

    green,

    red,
    red75,
    redError,

    black,
    blackDark,
    blackDarker,
    blackDarkest,
    black50,

    grey,
    greyDark,
    grey10,
    grey100,
  },
  primary: {
    main: greyDark,
    light: white50,
    contrastText: 'white',
  },
  error: {
    main: '#A51C30',
    light: '#A7333F',
    contrastText: white,
  },
  grey: {
    100: '#EAEAEA',
    200: '#C9C5C5',
    300: '#888',
    400: '#666',
  },
  yellow: {
    main: yellow,
    light: '#FFF9C4',
    dark: yellowDarker,
    contrastText: greyDark,
  }
};

const shadows = {
  0: 'none',
  1: '0px 5px 10px rgba(0,0,0,0.12)',
  2: '0px 8px 30px rgba(0,0,0,0.24)',
  3: '0px 4px 15px rgba(0,0,0,0.25)'
};

const typography = {
  fontFamily: "'Rubik', sans-serif",
};

const shape = {
  borderRadius: spacing['xxsmall'],
  borderRadius10: '10px',
  borderRadius5: '5px',
};

type palleteTypes = {
  [key: string]: any
}

export interface ITheme {
  palette: palleteTypes,
  shadows: any,
  typography: object,
  shape: object
}

export const theme: ITheme = {
  palette,
  shadows,
  typography,
  shape,
};
