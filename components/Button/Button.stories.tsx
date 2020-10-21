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

export const Appereances = () => {
  return (
    <DarkBackground>
      <SpacingBottom>
        <Button> DEFAULT </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="outline"> PRIMARY OUTLINE </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="secondary"> SECONDARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="secondary" variant="outline"> SECONDARY OUTLINE </Button>
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
    <DarkBackground>
      <SpacingBottom>
        <Button disabled> DEFAULT </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="primary" variant="outline"> PRIMARY OUTLINE </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="secondary"> SECONDARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="secondary" variant="outline"> SECONDARY OUTLINE </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="primary" variant="icon"> ☕ </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button disabled color="primary" variant="icon-circle"> ☕ </Button>
      </SpacingBottom>
    </DarkBackground>
  );
};

export const LoadingState = () => {
  return (
    <DarkBackground>
      <SpacingBottom>
        <Button loading> DEFAULT </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="primary" variant="outline"> PRIMARY OUTLINE </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="secondary"> SECONDARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="secondary" variant="outline"> SECONDARY OUTLINE </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="primary" variant="icon"> ☕ </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button loading color="primary" variant="icon-circle"> ☕ </Button>
      </SpacingBottom>
    </DarkBackground>
  );
};

export const WithIcon = () => {
  return (
    <DarkBackground>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"}> DEFAULT </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"} color="primary"> PRIMARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"} color="primary" variant="outline"> PRIMARY OUTLINE </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"} color="secondary"> SECONDARY </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button startIcon={"😜"} endIcon={"►"} color="secondary" variant="outline"> SECONDARY OUTLINE </Button>
      </SpacingBottom>
  </DarkBackground>
  )
};

export const Stressed = () => {
  return (
    <DarkBackground>
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
        <Button color="secondary"> QWERTYASDFGHJKLSAJDJSADJHDJ SADGHSADHSADGJHASGDJHASGDJHSADHJSADASD ASDSAD </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="secondary" variant="outline"> QWERTYASDFGHJKLSAJDJSADJHDJ SADGHSADHSADGJHASGDJHASGDJHSADHJSADASD ASDSAD </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="icon"> QWERTYASDFGHJKLSAJDJSADJHDJ SADGHSADHSADGJHASGDJHASGDJHSADHJSADASD ASDSAD </Button>
      </SpacingBottom>
      <SpacingBottom>
        <Button color="primary" variant="icon-circle"> QWERTYASDFGHJKLSAJDJSADJHDJ SADGHSADHSADGJHASGDJHASGDJHSADHJSADASD ASDSAD </Button>
      </SpacingBottom>
  </DarkBackground>
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
      <DarkBackground>
        <Button
          variant={text('variant', 'solid')}
          color={text('color', 'orange')}
          size={text('size', 'medium')}
          disabled={boolean('disabled', false)}
          enableElevation={boolean('enableElevation', false)}
        >
          ORANGE
        </Button>
      </DarkBackground>
    </ThemeProvider>
  );
};

