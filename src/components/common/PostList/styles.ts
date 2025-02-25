import styled, { css } from 'styled-components';

type PropsStyles = {
  isThreadList?: boolean
}

export const Feed = styled.ul<PropsStyles>`
  ${({ theme, isThreadList = false }) => css`
    padding-bottom: ${isThreadList ? '0' : '14px'};
    border-top: 1px solid ${theme.colors.darkShades.d_55};

    & > li {
      border-bottom: 1px solid ${theme.colors.darkShades.d_55};
      position: relative;

      ${isThreadList &&
      css`
        border-bottom: none;
        padding-top: 0;
        &::after {
          content: "";
          position: absolute;
          left: 34px;
          bottom: 2px;
          width: 2px;
          height: calc(100% - 44px);
          background-color: ${theme.colors.darkShades.d_55};
        }
      `}
    }
  `}
`;
