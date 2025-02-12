import styled, { css } from 'styled-components';

import { ButtonClose, ButtonPrimary, Modal, Overlay, Label } from '../../../styles/common';

export const ModalOverlay = styled(Overlay)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalForm = styled(Modal)`
  padding-bottom: 64px;
  height: 650px;
  width: 100%;
  max-width: 600px;
  overflow-y: scroll;
`;

export const HeaderModal = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    gap: 26px;
    width: 100%;
    padding: 12px 16px;
    background-color: ${theme.colors.absoluteColors.black};
    z-index: 1;

    h2 {
      font-size: ${theme.fontSizes.lg};
    }
  `}
`;

export const CloseModal = styled(ButtonClose)`
  position: static;
`;

export const ButtonSubmit = styled(ButtonPrimary)`
  ${({ theme }) => css`
    margin-left: auto;
    padding: 8px 16px;
    font-size: ${theme.fontSizes.sm};
  `}
`;

export const TextInputsContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

    h2 {
      font-size: ${theme.fontSizes.lg};
      font-weight: ${theme.fontWeights.medium};
      margin-bottom: 12px;
    }
  `}
`;

export const LabelContainer = styled(Label)`
  input {
    max-width: 100%;
  }

  input:disabled + span,
  input:disabled {
    cursor: not-allowed;
  }
`;

export const MessageError = styled.small`
  ${({ theme }) => css`
    color: red;
    margin-bottom: 30px;
    padding-left: 8px;
    font-size: ${theme.fontSizes.xs};
  `};
`;

export const ProfileImages = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #ccc;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  bottom: -76px;
  left: 16px;
  width: 100%;
  max-width: 120px;
  max-height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid black;
  background-color: #ccc;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 120px;
  object-fit: cover;
`;

export const EditIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &.gap {
    left: calc(50% - 30px);
  }

  img {
    width: 22px;
    height: 22px;
  }
`;

export const RemoveIcon = styled(EditIcon)`
  position: absolute;
  left: calc(50% + 30px);
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;


