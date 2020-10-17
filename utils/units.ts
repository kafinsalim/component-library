import { rem } from 'polished';

export const spacing = {
  none: 0,
  xxsmall: rem('4px'),
  xsmall: rem('8px'),
  small: rem('12px'),
  medium: rem('20px'),
  gutter: rem('24px'),
  large: rem('32px'),
  xlarge: rem('48px'),
  xxlarge: rem('96px'),
};

export const fontSizes = {
  xsmall: '0.75rem',
  small: '0.825rem',
  medium: '1rem',
  large: '1.125rem',
  xlarge: '1.25rem',
  xxlarge: '1.5rem',
};

// https://material-ui.com/customization/breakpoints/
export const breakpoints = {
  xsmall: '0px',
  small: '600px',
  medium: '960px',
  large: '1280px',
  xlarge: '1920px'
};