import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { boolean, text } from '@storybook/addon-knobs';
import decorators from '../../.storybook/utils';
import { theme as defaultTheme } from '../../utils';
import { Button } from '../';
import { SpacingBottom, DarkBackground } from '../shared/styles';

export default {
  title: 'Components/Button',
  decorators,
};

export const Appearances = () => {
  return (
    <>
      <SpacingBottom>
        <Button> BUTTON </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="icon"> ☕ </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="icon-circle"> ☕ </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="link"> OTHER </Button>
      </SpacingBottom>
    </>
  );
};

export const WithDarkBackground = () => {
  return (
    <DarkBackground>
      <SpacingBottom>
        <Button> BUTTON </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="icon"> ☕ </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="icon-circle"> ☕ </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="link"> OTHER </Button>
      </SpacingBottom>
    </DarkBackground>
  );
};

export const DisableState = () => {
  return (
    <>
      <SpacingBottom>
        <Button disabled> BUTTON </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="primary" variant="icon"> ☕ </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="primary" variant="icon-circle"> ☕ </Button>
      </SpacingBottom>
    </>
  );
};

export const LoadingState = () => {
  return (
    <>
      <SpacingBottom>
        <Button loading> BUTTON </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="primary" variant="icon"> ☕ </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="primary" variant="icon-circle"> ☕ </Button>
      </SpacingBottom>
    </>
  );
};

export const WithIcon = () => {
  return (
    <>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"}> BUTTON </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"} color="primary"> PRIMARY </Button>
      </SpacingBottom>
  </>
  )
};

export const Stressed = () => {
  return (
    <>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"}> BUTTON1IO23IO3UIO32I32OI32IO32OI3UI23UOI2U32OI3I232I323 2I3UI2O3UI23IO2U3I2I3UI23I2I3 </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"} color="primary"> PRIMARY 23KLL3JK2J3KL2J 3LK2ASDASDASDASDJ3LK2J3LK23 2K3J 2LK3J2K3JL23J2K3J2L3J2K32 </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="icon"> AKJSDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="icon-circle"> ASDJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ </Button>
      </SpacingBottom>
  </>
  )
};

const theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    orange: {
      main: '#F34706',
      light: '#FF5964',
      contrastText: '#fff'
    },
  },
};

export const OverwriteWithTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={text('variant', 'solid')}
        color={text('color', 'orange')}
        size={text('size', 'medium')}
        disabled={boolean('disabled', false)}
        enableElevation={boolean('enableElevation', false)}
      >
        ORANGE
      </Button>
    </ThemeProvider>
  );
};

