import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Button } from './Button';
import serializer, { matchers } from 'jest-emotion'
import { fontSizes, spacing, theme } from '../../utils';

expect.addSnapshotSerializer(serializer)
expect.extend(matchers)

describe('<Button />', () => {
  it('should render the default button with a text', () => {
    render(<Button>Default Button</Button>)
    expect(screen.getByText('Default Button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toMatchSnapshot()
  });

  it('should occured some click event', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Default Button</Button>)
    // click one time
    userEvent.click(screen.getByText('Default Button'))
    expect(onClick).toHaveBeenCalledTimes(1)

    // click two times
    userEvent.click(screen.getByText('Default Button'))
    expect(onClick).toHaveBeenCalledTimes(2)
  });

  it('should render with size small', () => {
    render(<Button size="small">With Size Props Small</Button>)
    expect(screen.getByRole('button')).toHaveStyleRule('font-size', fontSizes['xsmall'])
    expect(screen.getByRole('button')).toHaveStyleRule('padding', `${spacing['xsmall']} ${spacing['small']}`)
    expect(screen.getByRole('button')).toMatchSnapshot()
  });

  it('should render with size medium', () => {
    render(<Button size="medium">With Size Props Medium</Button>)
    expect(screen.getByRole('button')).toHaveStyleRule('font-size', fontSizes['small'])
    expect(screen.getByRole('button')).toHaveStyleRule('padding', `${spacing['small']} ${spacing['medium']}`)
    expect(screen.getByRole('button')).toMatchSnapshot()
  });

  it('should render with variant outline', () => {
    render(<Button size="medium" variant="outline">With variant</Button>)
    expect(screen.getByRole('button')).toHaveStyleRule('border', `1px solid ${theme.palette.common.black}`)
    expect(screen.getByRole('button')).toHaveStyleRule('color', theme.palette.common.black)
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', theme.palette.common.white)
    expect(screen.getByRole('button')).toMatchSnapshot()
  });

  it('should render with variant outline & primary color', () => {
    render(<Button size="medium" color="primary" variant="outline">With Variant & color</Button>)
    expect(screen.getByRole('button')).toHaveStyleRule('border', `1px solid ${theme.palette.primary.main}`)
    expect(screen.getByRole('button')).toHaveStyleRule('color', theme.palette.primary.main)
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', theme.palette.common.white)
    expect(screen.getByRole('button')).toMatchSnapshot()
  });

  it('should render with disabled attribute & cannot be click', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick} size="medium" disabled>With disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
    userEvent.click(screen.getByRole('button'))
    // cannot be clicked when disabled
    expect(onClick).not.toHaveBeenCalled()
    expect(screen.getByRole('button')).toMatchSnapshot()
  });

  it('should render with enable elevation', () => {
    render(<Button size="medium" enableElevation>With disabled</Button>)
    expect(screen.getByRole('button')).toHaveStyleRule('box-shadow', theme.shadows[1])
    expect(screen.getByRole('button')).toMatchSnapshot()
  });
});