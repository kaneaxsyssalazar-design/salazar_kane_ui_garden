import React from 'react';
import styled, { css } from 'styled-components';
import { ImgProps } from './Img.types';
import { colors, disabledCss, placeholderImage } from '../../theme';

const StyledImg = styled.img<{ $bg: string; $disabled: boolean }>`
  display: block;
  max-width: 100%; /* responsive */
  height: auto;
  ${(p) =>
    p.$disabled
      ? css`
          ${disabledCss}
          filter: grayscale(100%);
          opacity: 0.6;
        `
      : css`
          background-color: ${p.$bg};
        `}
`;

export const Img: React.FC<ImgProps> = ({
  src = placeholderImage,
  alt = 'Placeholder image',
  backgroundColor = colors.light,
  disabled = false,
  ...rest
}) => (
  <StyledImg
    data-testid="img"
    src={src}
    alt={alt}
    $bg={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
    {...rest}
  />
);

export default Img;
