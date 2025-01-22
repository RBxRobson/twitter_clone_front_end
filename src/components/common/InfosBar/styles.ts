import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 12px 0;

  a {
    white-space: nowrap;
  };

  a:hover {
    text-decoration: underline;
  }
`;