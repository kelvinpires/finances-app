import styled, { css } from "styled-components";

export const ModalDeleteContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1d1d1d80;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: 0;
  transition: all 0.2s ease;
  z-index: -1;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: 999;
    `}
`;

export const ModalDeleteWrapper = styled.main`
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-bg);
`;

export const DeleteText = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 4rem;
  color: var(--text);
  font-weight: 600;
`;

export const DeleteMessageBox = styled.div`
  background-color: #f60a2060;
  border: 0.2rem solid #f60a20;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
  }
`;

export const DeleteMessage = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  color: var(--white);
  font-weight: 500;
  text-shadow: 0 0 0.5rem var(--text);
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
`;

export const DeleteButton = styled.button`
  width: 100%;
  border: 0.2rem solid var(--red);
  padding: 1rem 2rem;
  background-color: var(--red);
  color: var(--light-bg);

  font-family: "Roboto", sans-serif;
  font-size: 2.4rem;
  font-weight: 500;
  cursor: pointer;
  ${({ cancel }) =>
    cancel &&
    css`
      background-color: var(--light-bg);
      color: var(--red);
    `};
`;
