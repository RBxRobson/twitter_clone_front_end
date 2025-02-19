import styled, { css } from 'styled-components';

export const PostContainer = styled.li`
  position: relative;
  padding: 16px 16px 8px;
  cursor: pointer;

  &.is-repost {
    padding-top: 28px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  gap: 8px;

  &>img {
    cursor: default;
  }
`;

export const PostInteractions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: 40px;
  margin-top: 6px;
`;

export const MoreButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 6px;
    right: 8px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 50%;

    img {
      width: 20px;
    }

    &:hover,
    &:active {
      background-color: ${theme.colors.darkShades.d_65};
    }
  `}

`;

export const ClosePopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100dvh;
  width: 100dvw;
  cursor: default;
`;