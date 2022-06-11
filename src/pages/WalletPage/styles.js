import styled from "styled-components";

export const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const AddTransaction = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 0.2rem solid var(--orange);
  padding: 1rem 2rem;
  color: var(--orange);
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-align: left;
  margin-top: 4rem;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: var(--orange);
    color: var(--text);
  }
`;
