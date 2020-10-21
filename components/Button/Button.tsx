import * as React from 'react'
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {
  isObjectEmpty,
  spacing,
  fontSizes,
  theme as defaultTheme,
} from '../../utils';
import { buttonPropSize, IButtonProps, PropsByVariant, variantType, iconWrapperProp } from './Button.type';
import { Loader } from '../Loader';
import { ArrowRight } from './ArrowIcon';
import { COLOR_SECONDARY } from './constants';

const buttonSizeProps: buttonPropSize = {
  small: {
    fontSize: fontSizes['xsmall'],
    padding: `${spacing['xsmall']} ${spacing['small']}`,
  },
  medium: {
    fontSize: fontSizes['small'],
    padding: `${spacing['small']} ${spacing['gutter']}`,
  },
  large: {
    fontSize: fontSizes['medium'],
    padding: `${spacing['medium']} ${spacing['large']}`,
  },
};



const getPropsByVariant = ({ variant, color, theme }: PropsByVariant) => {
  const isSecondary = color === COLOR_SECONDARY
  const colorInPalette = theme.palette[color];

  const defaultOutlineVariantProps = {
    main: {
      border: `2px solid ${theme.palette.common.black}`,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    hover: {
      border: `2px solid ${theme.palette.common.black}`,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
  };

  const outlineVariantPropsByPalette = colorInPalette && !isSecondary ? {
    main: {
      border: `3px solid ${theme.palette.yellow.main}`,
      backgroundColor: 'transparent',
      color: theme.palette.yellow.main,
      // this will target the spinner loading
      '& #loading_spinner_animated > path': {
        fill: colorInPalette.main
      }
    },
    hover: {
      border: `3px solid ${colorInPalette.main}`,
      color: colorInPalette.main,
    },
    active: {
      border: `3px solid ${theme.palette.yellow.dark}`,
      color: theme.palette.common.blackDark,
    },
    focus: {
      border: `3px solid ${theme.palette.grey[300]}`,
      color: colorInPalette.contrastText
    },
    disabled: {
      border: `3px solid ${theme.palette.grey[300]}`,
      color: theme.palette.grey[300],
    },
  } : {
    // secondary outline
    main: {
      border: `2px solid ${theme.palette.common.grey10}`,
      backgroundColor: 'rgba(185, 184, 185, 0.1)',
      color: 'white',
      // arrow right transition
      '& #arrow_right': {
        position: 'relative',
        left: 0,
        transition: 'all ease-in 0.2s'
      },
    },
    hover: {
      border: `2px solid white`,
      color: 'white',
      backgroundColor: '#52565C',
      '& #arrow_right': {
        left: 8
      }
    },
  };

  const defaultSolidVariantProps = {
    main: {
      border: `1px solid ${theme.palette.grey[100]}`,
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.common.black,
    },
    hover: {
      border: `1px solid ${theme.palette.grey[200]}`,
      backgroundColor: theme.palette.grey[200],
    },
  };

  const solidVariantPropsByPalette = colorInPalette && !isSecondary ? {
    main: {
      border: `2px solid transparent`,
      backgroundColor: colorInPalette.main,
      color: colorInPalette.contrastText,
    },
    hover: {
      border: `2px solid transparent`,
      backgroundColor: theme.palette.yellow.main,
      color: theme.palette.common.greyDark,
    },
    active: {
      border: `2px solid transparent`,
      backgroundColor: theme.palette.yellow.dark,
      color: theme.palette.common.blackDark,
    },
    focus: {
      border: `2px solid ${theme.palette.common.white50}`,
      backgroundColor: colorInPalette.main,
      color: colorInPalette.contrastText,
    },
    disabled: {
      border: `2px solid transparent`,
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.common.white75,
    },
  } : {
      // secondary solid
      main: {
        border: `2px solid transparent`,
        backgroundColor: colorInPalette?.main,
        color: 'white',
        // arrow right transition
        '& #arrow_right': {
          position: 'relative',
          left: 0,
          transition: 'all ease-in 0.2s'
        }
      },
      hover: {
        border: `2px solid transparent`,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        '& #arrow_right': {
          left: 8
        }
      },
  };

  const iconStyleMain = {
    width: 48,
    minWidth: 48,
    padding: '0 !important',
    justifyContent: 'center'
  }

  const iconCircleStyleMain = {
    ...iconStyleMain,
    borderRadius: '50%'
  }

  const iconVariantPropsByPalette = {
    ...solidVariantPropsByPalette,
    main: {...solidVariantPropsByPalette?.main, ...iconStyleMain}
  }

  const defaultIconVariantProps = {
    ...defaultSolidVariantProps,
    main: {...defaultOutlineVariantProps?.main, ...iconStyleMain}
  }

  const iconCircleVariantPropsByPalette = {
    ...solidVariantPropsByPalette,
    main: {...solidVariantPropsByPalette?.main, ...iconCircleStyleMain}
  }

  const defaultIconCircleVariantProps = {
    ...defaultSolidVariantProps,
    main: {...defaultOutlineVariantProps?.main, ...iconCircleStyleMain}
  }

  const defaultLinkVariantProps = {
    main: {
      color: theme.palette.common.black,
      textDecoration: "underline",
      boxShadow: theme.shadows[0],
      border: 0,
      backgroundColor: 'transparent',
      padding: spacing.xxsmall,
      height: 'inherit',
      width: 'inherit',
      minWidth: 50
    },
    hover: {
      color: theme.palette.grey[200],
    },
  };
  
  const linkVariantPropsByPalette = {
    main: {
      color: theme.palette.grey[300],
      textDecoration: "underline",
      boxShadow: theme.shadows[0],
      border: 0,
      backgroundColor: 'transparent',
      padding: `${spacing.xxsmall} ${spacing.xsmall}`,
      height: 'inherit',
      width: 'inherit',
      minWidth: 50
    },
    hover: {
      color: theme.palette.common.greyDark,
    },
  }



  const variants: variantType = {
    outline: colorInPalette
      ? outlineVariantPropsByPalette
      : defaultOutlineVariantProps,
    solid: colorInPalette
      ? solidVariantPropsByPalette
      : defaultSolidVariantProps,
    icon: colorInPalette
      ? iconVariantPropsByPalette
      : defaultIconVariantProps,
    "icon-circle": colorInPalette
      ? iconCircleVariantPropsByPalette
      : defaultIconCircleVariantProps,
    link: colorInPalette
      ? linkVariantPropsByPalette
      : defaultLinkVariantProps,
  };

  return variants[variant] || variants.solid;
};

const IconWrapper = styled.span`
  padding-left: ${(props: iconWrapperProp) => props.leftSpacing ? spacing["xsmall"] : 0};
  padding-right: ${(props: iconWrapperProp) => props.rightSpacing ? spacing["xsmall"] : 0};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    padding-left: ${(props: iconWrapperProp) =>
      props.leftSpacing ? 
      (props.isSecondary ? spacing["xlarge"] : spacing["xsmall"]):
      0
    };
  }
`

const StyledButton = ({
  color,
  size = "medium",
  variant = "solid",
  enableElevation = false,
  disabled = false,
  theme
}: IButtonProps) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }

  const fontSizeBySize = buttonSizeProps[size]?.fontSize;
  const paddingBySize = buttonSizeProps[size]?.padding;

  const propsByVariant = getPropsByVariant({ variant, theme, color });

  const iconStyleDesktop = {
    width: 52,
    minWidth: 52,
  }

  return {
    minHeight: color === COLOR_SECONDARY ? 42 : 48,
    minWidth: 96,
    fontWeight: 500,
    cursor: 'pointer',
    opacity: disabled && 0.7,
    transition: 'all 0.15s linear',
    letterSpacing: '0.6px',
    padding: buttonSizeProps.medium.padding,
    borderRadius: theme.shape.borderRadius10,
    fontFamily: theme.typography.fontFamily,
    outline: 0,
    boxSizing: 'border-box',
    display :'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: enableElevation ? theme.shadows[1] : theme.shadows[3],
    ...(paddingBySize && { padding: paddingBySize }),
    ...(propsByVariant && propsByVariant.main),
    ...(fontSizeBySize && { fontSize: fontSizeBySize }),
    '&:hover': !disabled && {
      boxShadow: enableElevation && theme.shadows[2],
      ...(propsByVariant && propsByVariant.hover),
    },
    '&:active': !disabled && {
      boxShadow: enableElevation && theme.shadows[2],
      ...(propsByVariant && propsByVariant.active),
    },
    '&:focus': !disabled && {
      ...(propsByVariant && propsByVariant.focus),
    },
    '&:disabled': {
      cursor: 'not-allowed',
      ...(propsByVariant && propsByVariant.disabled),
    },
    '& > :first-of-type:last-of-type' : {
      margin: '0 auto',
    },
    fontSize: fontSizes.xsmall,
    // Mobile first queries
    /* Larger than mobile */
    '@media (min-width: 600px)': {
      minHeight: 52,
      fontSize: fontSizes.small,
      ...(variant?.includes('icon') && iconStyleDesktop)
    },
  };
};

const IGNORED_PROPS = ['color'];

const buttonConfig = {
  shouldForwardProp: (prop: any) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};

const MainButton = styled('button', buttonConfig)(StyledButton);

export const Button = (props: IButtonProps) => {

  const StartIcon: any = () => {
    return props.startIcon ? <IconWrapper rightSpacing>{props.startIcon}</IconWrapper> : null
  }

  const EndIcon: any = () => {
    // if this is secondary button
    // 'll show the right arrow icon
    const isSecondary = props.color === COLOR_SECONDARY && !props.endIcon;
    const secondaryStyles = props.color === COLOR_SECONDARY && !props.endIcon && {
      // paddingLeft: spacing["xlarge"]
    }
    return props.endIcon || props.color === COLOR_SECONDARY ?
      <IconWrapper leftSpacing style={{...secondaryStyles}} isSecondary={isSecondary}>
        {props.endIcon || <ArrowRight />}
      </IconWrapper> :
      null
  }

  const ChildrenAndIcon = () => (
    <>
      <StartIcon />
      {props.children}
      <EndIcon />
    </>
  )

  const children = props.loading ? <Loader /> : <ChildrenAndIcon />

  return (
    <MainButton {...props}>
      {children}
    </MainButton>)
}
