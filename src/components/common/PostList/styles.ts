import styled from 'styled-components';

export const PostContainer = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 16px 16px 8px;
  cursor: pointer;

  &>img {
    cursor: default;
  }

  &.is-repost {
    padding-top: 28px;
  }
`;
