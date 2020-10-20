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
  parameters: {
    info: { 
      source: false,
      propTablesExclude: [SpacingBottom, DarkBackground, ThemeProvider]
     },
  },
};

export const Appearances = () => {
  return (
    <React.Fragment>
      <SpacingBottom>
        <Button> BUTTON </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="outline"> PRIMARY OUTLINE </Button>
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
    </React.Fragment>
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
        <Button color="primary" variant="outline"> PRIMARY OUTLINE </Button>
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
    <React.Fragment>
      <SpacingBottom>
        <Button disabled> BUTTON </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="primary" variant="outline"> PRIMARY OUTLINE </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="primary" variant="icon"> ☕ </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="primary" variant="icon-circle"> ☕ </Button>
      </SpacingBottom>
    </React.Fragment>
  );
};

export const LoadingState = () => {
  return (
    <React.Fragment>
      <SpacingBottom>
        <Button loading> BUTTON </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="primary" variant="outline"> PRIMARY OUTLINE </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="primary" variant="icon"> ☕ </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="primary" variant="icon-circle"> ☕ </Button>
      </SpacingBottom>
    </React.Fragment>
  );
};

export const WithIcon = () => {
  return (
    <React.Fragment>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"}> BUTTON </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"} color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"} color="primary" variant="outline"> PRIMARY OUTLINE </Button>
      </SpacingBottom>
  </React.Fragment>
  )
};

export const Stressed = () => {
  return (
    <React.Fragment>
      <SpacingBottom>
        <Button> QWERTYASDFGHJKLSAJDJSADJHDJ SADGHSADHSADGJHASGDJHASGDJHSADHJSADASD ASDSAD </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary"> QWERTYASDFGHJKLSAJDJSADJHDJ SADGHSADHSADGJHASGDJHASGDJHSADHJSADASD ASDSAD </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="outline"> QWERTYASDFGHJKLSAJDJSADJHDJ SADGHSADHSADGJHASGDJHASGDJHSADHJSADASD ASDSAD </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="icon"> QWERTYASDFGHJKLSAJDJSADJHDJ SADGHSADHSADGJHASGDJHASGDJHSADHJSADASD ASDSAD </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="icon-circle"> QWERTYASDFGHJKLSAJDJSADJHDJ SADGHSADHSADGJHASGDJHASGDJHSADHJSADASD ASDSAD </Button>
      </SpacingBottom>
  </React.Fragment>
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

