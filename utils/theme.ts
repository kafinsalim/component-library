import { transparentize } from 'polished';
import { spacing } from './units';

const white = transparentize(0.75, '#fff');
const white75 = transparentize(0.5, '#fff');
const white50 = transparentize(0.25, '#fff');
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
const redError = '#DB524E';

const palette = {
  common: {
    white,
    white75,
    white50,
    black,
    yellow,
    yellowDarker,
    green,
    red,
    red75,
    grey,
    blackDark,
    blackDarker,
    blackDarkest,
    greyDark,
    grey10,
    redError,
  },
  primary: {
    main: '#0070F3',
    light: '#146DD6',
    contrastText: white,
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
};

const shadows = {
  0: 'none',
  1: '0px 5px 10px rgba(0, 0, 0, 0.12)',
  2: '0px 8px 30px rgba(0, 0, 0, 0.24)',
};

const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
};

const shape = {
  borderRadius: spacing['xxsmall'],
};

type palleteTypes = {
  [key: string]: any
}

export interface ITheme {
  palette: palleteTypes,
  shadows: object,
  typography: object,
  shape: object
}

export const theme: ITheme = {
  palette,
  shadows,
  typography,
  shape,
};
