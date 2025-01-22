import styled from 'styled-components';

export const AsideInfos = styled.aside`
  position: sticky;
  top: 0; 
  height: 100dvh; 
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-top: 8px;
  padding-left: 30px;
  padding-right: 8px;

  &>nav {
    justify-content: start;
    padding: 0 12px;
    gap: 6px 12px;
  }
`;