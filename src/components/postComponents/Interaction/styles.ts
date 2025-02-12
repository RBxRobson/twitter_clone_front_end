import styled, { css } from 'styled-components';

export const Interaction = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 8px;
    transition: ease 400ms;
    width: fit-content;

    svg {
      max-width: 20px;
      fill: ${theme.colors.darkShades.d_50};
    }

    span {
      color: ${theme.colors.darkShades.d_50};
      font-size: ${theme.fontSizes.xs};
    }

    &:active {
      svg {
        transform: scale(1.2);
      }
    }

    &.like-icon:hover,
    &.like-icon:active,
    &.like-icon-active {
      svg {
        fill: #f91880;
      }
      span {
        color: #f91880;
      }
    }
    &.like-icon:hover,
    &.like-icon:active {
      background-color:rgba(249, 24, 129, 0.15);
    }

    &.comment-icon:hover,
    &.comment-icon:active,
    &.quote-icon:hover,
    &.quote-icon:active {
      background-color:rgba(29, 156, 240, 0.15);
      svg {
        fill: ${theme.colors.blueShades.b_50};
      }
      span {
        color: ${theme.colors.blueShades.b_50};
      }
    }

    &.repost-icon:hover,
    &.repost-icon:active,
    &.repost-icon-active {
      svg {
        fill: #00ba7c;
      }
      span {
        color: #00ba7c;
      }
    }
    &.repost-icon:hover,
    &.repost-icon:active {
      background-color:rgba(0, 186, 124, 0.15);
    }
  `}
`;