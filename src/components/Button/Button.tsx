import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';
import { breakpoints, colors, disabledCss } from '../../theme';

const StyledButton = styled.button<{ $bg: string; $color: string; $disabled: boolean }>`
  padding: 0.6rem 1.4rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  ${(p) =>
    p.$disabled
      ? disabledCss
      : css`
          background-color: ${p.$bg};
          color: ${p.$color};
          cursor: pointer;
        `}
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  backgroundColor = colors.primary,
  textColor = colors.white,
  disabled = false,
  children,
  ...rest
}) => (
  <StyledButton
    data-testid="button"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    disabled={disabled}
    {...rest}
  >
    {children ?? label}
  </StyledButton>
);

export default Button;
