import styled, { css } from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 0 40px;
`;

export const PostContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const VerticalLine = styled.div`
  ${({ theme }) => css`
    display: block;
    width: 2px;
    background-color: ${theme.colors.darkShades.d_55};
    height: calc(100% - 44px);
    margin: 0 auto;
  `};
`;

export const ReplyWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 8px;

    ${VerticalLine} {
      height: 40px;
      margin: 0 28px 0 19px;
    }

    p {
      color: ${theme.colors.darkShades.d_45};

      span {
        color: ${theme.colors.blueShades.b_50};
      }
    }
  `}
`;

export const ContentPost = styled.div`
  text-align: start;

  &>p {
    margin: 6px 0 14px;
    word-break: break-word;
  }
`;
