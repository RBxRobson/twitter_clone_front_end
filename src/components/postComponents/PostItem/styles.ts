import styled from 'styled-components';

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