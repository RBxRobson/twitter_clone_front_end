import styled from 'styled-components';

export const MainContainer = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;

  &>.modal {
    z-index: 10;
  }
`;
