import styled from "styled-components";
import { css } from "styled-components";

export const NewTransactionContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  top: 0;
  background-color: #1d1d1d90;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: 20;
    `}
`;

export const NewTransactionModalWrapper = styled.div`
  background-color: var(--text);
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 0.2rem solid var(--orange);

  position: relative;

  @media screen and (min-width: 700px) {
    width: 40%;
  }
`;

export const NewTransactionTitle = styled.h2`
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
  color: var(--orange);
  font-weight: 500;
  width: 100%;
  text-align: left;
`;

export const CloseModalContent = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  &:hover {
    opacity: 0.5;
  }
`;

export const CloseModalImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 100%;
  height: 100%;
  margin: 2rem;
`;

export const ActionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 5rem 0;
`;

export const ActionLabel = styled.label`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2rem;
  cursor: pointer;
  gap: 0.5rem;
  border: 0.2rem solid var(--orange);
  padding: 3rem;
  background-color: var(--dark-bg);
  opacity: 0.2;
  &:hover {
    opacity: 1;
  }
`;

export const ActionImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  font-size: 2.4rem;
  font-family: "Roboto", sans-serif;
  border: 0.2rem solid var(--orange);
  padding: 1rem 2rem;
  background-color: var(--text);
  outline: none;
  color: var(--white);
  &::placeholder {
    color: #c9c9c9;
  }

  &[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(1);
  }
`;

export const InputRadio = styled(Input)`
  display: none;

  &:checked + label {
    opacity: 1;
  }
`;

export const SubmitBtn = styled.button`
  padding: 1rem 2rem;
  width: calc(100% + 4rem);
  height: 6rem;
  background-color: var(--orange);
  color: var(--text);
  font-size: 2.4rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  border: 0;
  cursor: pointer;
`;
