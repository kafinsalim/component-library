import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Button } from './Button';
import serializer, { matchers } from 'jest-emotion'
import { spacing, theme } from '../../utils';

expect.addSnapshotSerializer(serializer)
expect.extend(matchers)

describe('<Button />', () => {
  it('should render the default button with a text', () => {
    render(<Button>Default Button</Button>)

    expect(screen.getByText('Default Button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toMatchSnapshot()
  });

  it('should render the primary button', () => {
    render(<Button color="primary">Primary</Button>)

    expect(screen.getByText('Primary')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveStyleRule('height', '48px')
    expect(screen.getByRole('button')).toHaveStyleRule('border-radius', '10px')
    expect(screen.getByRole('button')).toHaveStyleRule('padding', `${spacing["small"]} ${spacing["gutter"]}`)
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', theme.palette.primary.main)
    expect(screen.getByRole('button')).toMatchSnapshot()
  });
  
  it('should render the variant="icon"', () => {
    render(<Button color="primary" variant="icon">icon</Button>)
    
    expect(screen.getByText('icon')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', theme.palette.primary.main)
    expect(screen.getByRole('button')).toHaveStyleRule('border-radius', '10px')
    expect(screen.getByRole('button')).toHaveStyleRule('padding', '0 !important')
    expect(screen.getByRole('button')).toHaveStyleRule('width', '48px')
    expect(screen.getByRole('button')).toHaveStyleRule('height', '48px')
    expect(screen.getByRole('button')).toMatchSnapshot()
  });

  it('should render the variant="icon-circle"', () => {
    render(<Button color="primary" variant="icon-circle">icon circle</Button>)

    expect(screen.getByText('icon circle')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveStyleRule('border-radius', '50%')
    expect(screen.getByRole('button')).toHaveStyleRule('width', '48px')
    expect(screen.getByRole('button')).toHaveStyleRule('height', '48px')
    expect(screen.getByRole('button')).toMatchSnapshot()
  });

  it('should fired on click', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Default Button</Button>)

    // click one time
    userEvent.click(screen.getByText('Default Button'))
    expect(onClick).toHaveBeenCalledTimes(1)

    // click two times
    userEvent.click(screen.getByText('Default Button'))
    expect(onClick).toHaveBeenCalledTimes(2)
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

  it('should render with loading spinner', () => {
    const wrapper = render(<Button loading={true}>With disabled</Button>)
    const button =  wrapper.container.firstElementChild
    const spinnerLoading = button.firstChild
    
    expect(spinnerLoading).toBeInTheDocument()
    expect(screen.getByRole('button')).toMatchSnapshot()
  });

  it('should render with enable elevation', () => {
    render(<Button size="medium" enableElevation>With disabled</Button>)

    expect(screen.getByRole('button')).toHaveStyleRule('box-shadow', theme.shadows[1])
    expect(screen.getByRole('button')).toMatchSnapshot()
  });
});