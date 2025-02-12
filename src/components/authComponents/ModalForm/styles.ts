import styled, { css } from 'styled-components';

import { 
  ButtonPrimary, 
  Modal, 
  ButtonClose, 
  Overlay,
  Label
} from '../../../styles/common';

export { ButtonClose, Label };

export const ModalOverlay = styled(Overlay)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalForm = styled(Modal)`
  display: flex;
  flex-direction: column;
  padding: 12px 80px 26px;
`;

export const Logo = styled.img`
  align-self: center;
  max-width: 40px;
  margin-bottom: 24px;
`;

export const TitleForm = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl};
    text-align: start;
    margin-bottom: 50px;
  `};
`;

export const MessageError = styled.small`
  ${({ theme }) => css`
    color: red;
    margin-bottom: 30px;
    padding-left: 8px;
    font-size: ${theme.fontSizes.xs};
  `};
`;

export const ButtonSubmit = styled(ButtonPrimary)`
  margin-top: 50px;
`;