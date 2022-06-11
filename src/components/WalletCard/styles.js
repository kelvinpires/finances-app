import styled from "styled-components";

export const WalletCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const WalletCardContent = styled.main`
  width: 100%;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--orange);
  background-image: linear-gradient(
    to right top,
    #1d1d1d,
    #252525,
    #2e2e2e,
    #373737,
    #404040
  );
  box-shadow: 0 0 1.5rem var(--orange);
  display: grid;
  grid-template-areas:
    ". . receive"
    "total . receive"
    "total . expense"
    ". . expense";
  gap: 0 20rem;
  padding: 1rem 5rem 0 5rem;
  @media screen and (max-width: 1434px) {
    padding: 1rem 2rem 0 5rem;
    grid-template-areas:
      ". receive"
      "total receive"
      "total expense"
      ". expense";
  }
  @media screen and (max-width: 800px) {
    padding: 1rem 2rem 0 8rem;
  }
  @media screen and (max-width: 580px) {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }
`;

export const ItemLabel = styled.p`
  font-size: 1.8rem;
  color: var(--light-bg);
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 910px) {
    font-size: 1.4rem;
  }
`;

export const TotalDiv = styled.div`
  grid-area: total;
  @media screen and (max-width: 580px) {
    width: 100%;
    order: -1;
    text-align: center;
  }
`;

export const TotalMoney = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 5rem;
  color: var(--white);
  grid-area: total;

  @media screen and (max-width: 1110px) {
    font-size: 4rem;
  }
`;

export const ExpenseDiv = styled(TotalDiv)`
  grid-area: expense;
  order: 1;
`;
export const Expense = styled(TotalMoney)`
  font-weight: 500;
  font-size: 3.6rem;
  color: var(--red);

  @media screen and (max-width: 1110px) {
    font-size: 2.6rem;
  }
`;

export const ReceiveDiv = styled(TotalDiv)`
  grid-area: receive;
  order: 1;
`;
export const Receive = styled(TotalMoney)`
  font-weight: 500;
  font-size: 3.6rem;
  color: var(--green);
  @media screen and (max-width: 1110px) {
    font-size: 2.6rem;
  }
`;
