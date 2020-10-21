import {
  ITheme,
} from '../../utils';

export type buttonPropSize = {
  [key: string]: any
}

export type variantType = {
  [key: string]: any
}

export type PropsByVariant = {
  variant: string,
  color: string,
  theme: ITheme,
}

export interface IButtonProps {
  color?: string,
  size?: string,
  variant?: string,
  enableElevation?: boolean,
  disabled?: boolean,
  theme?: any,
  onClick?: any,
  children: React.ReactNode,
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
  loading?: boolean
}

export type iconWrapperProp = {
  leftSpacing?: boolean,
  rightSpacing?: boolean,
  isSecondary?: boolean
}