import styled from 'styled-components';

import { UserInfos } from '../../common/UserInfos/styles';

export { UserInfos };

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${UserInfos} {
    span,
    h4 {
      width: fit-content;

      &:hover {
      text-decoration: underline;
      }
    }

    .time {
      cursor: default;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export const ContentPost = styled.p`
  text-align: start;
`;
