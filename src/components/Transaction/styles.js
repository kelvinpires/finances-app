import styled, { css } from "styled-components";

export const TransactionBody = styled.main`
  margin: auto;
  width: 70%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const TransactionContainer = styled.section`
  margin: 5rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TransactionWrapper = styled.section`
  position: relative;
  width: 100%;
  ${({ isPayed }) =>
    isPayed
      ? css`
          border: 0.2rem solid #f60a20;
          background-color: #f60a2010;
        `
      : css`
          border: 0.2rem solid #00cd73;
          background-color: #00cd7310;
        `}
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin: 2rem 0;
  @media screen and (max-width: 600px) {
    width: calc(100% - 4rem);
  }
`;

export const TransactionPlaceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const TransactionImg = styled.img`
  width: 4rem;
  height: 4rem;
  padding: 2rem;
  border-radius: 50%;

  @media screen and (max-width: 450px) {
    width: 3rem;
    height: 3rem;
    padding: 1rem;
  }

  ${({ isPayed }) =>
    isPayed
      ? css`
          border: 0.2rem solid var(--red);
          background-color: #f60a2060;
        `
      : css`
          border: 0.2rem solid var(--green);
          background-color: #00cd7360;
        `}
`;

export const TransactionInfoBox = styled.div``;

export const TransactionTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 2.6rem;
  color: var(--white);

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`;

export const TransactionDate = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.8rem;
  color: var(--white);
  @media screen and (max-width: 450px) {
    font-size: 1.6rem;
  }
`;

export const TransactionValueContainer = styled.div``;

export const TransactionValue = styled(TransactionTitle)`
  text-shadow: 0 0 0.5rem var(--text);
  ${({ isPayed }) =>
    isPayed
      ? css`
          color: var(--red);
        `
      : css`
          color: var(--green);
        `}
`;

export const TransactionEditContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1d1d1d90;
  cursor: pointer;

  opacity: 0;
  z-index: 1;

  &:hover {
    opacity: 1;
    z-index: 30;
  }
`;

export const TransactionEditButton = styled.button`
  background-color: #ff941a99;
  border: 0.2rem solid #ff941a;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
`;

export const EditImg = styled.img`
  width: 4rem;
  height: 4rem;
`;
