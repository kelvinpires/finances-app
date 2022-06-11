import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { WalletContext } from "../../context/WalletContext/WalletContext";
import {
  Expense,
  ExpenseDiv,
  ItemLabel,
  Receive,
  ReceiveDiv,
  TotalDiv,
  TotalMoney,
  WalletCardContent,
  WalletCardContainer,
} from "./styles";

export const WalletCard = () => {
  const { transactions } = useContext(WalletContext);
  const [balance, setBalance] = useState("");
  const [expense, setExpense] = useState("");
  const [receive, setReceive] = useState("");

  const handleCalc = async () => {
    const values = transactions.map((transaction) => {
      return [transaction.pay, transaction.receive];
    });

    const expenseValues = transactions.map((transaction) => {
      return [transaction.pay];
    });
    const receiveValues = transactions.map((transaction) => {
      return [transaction.receive];
    });

    let allValues = [];
    let payAllValues = [];
    let receiveAllValues = [];

    for (let i = 0; i < values.length; i++) {
      allValues.push(...values[i]);
      payAllValues.push(...expenseValues[i]);
      receiveAllValues.push(...receiveValues[i]);
    }

    const total = await allValues.reduce(
      (previous, current) => previous + current,
      0
    );
    const payTotal = await payAllValues.reduce(
      (previous, current) => previous + current,
      0
    );
    const receiveTotal = await receiveAllValues.reduce(
      (previous, current) => previous + current,
      0
    );
    setBalance(total.toFixed(2));
    setExpense(payTotal.toFixed(2));
    setReceive(receiveTotal.toFixed(2));
  };

  useEffect(() => {
    handleCalc();
  });

  return (
    <WalletCardContainer>
      <WalletCardContent>
        <ReceiveDiv>
          <ItemLabel>Seus Ganhos</ItemLabel>
          <Receive>
            {receive > 0
              ? "+ R$" + receive.replace(".", ",")
              : "R$ " + receive.replace(".", ",")}
          </Receive>
        </ReceiveDiv>
        <TotalDiv>
          <ItemLabel>Saldo disponível</ItemLabel>
          <TotalMoney>
            {balance < 0
              ? "- R$ " + balance.replace("-", "").replace(".", ",")
              : "R$ " + balance.replace(".", ",")}
          </TotalMoney>
        </TotalDiv>
        <ExpenseDiv>
          <ItemLabel>Seus Gastos</ItemLabel>
          <Expense>
            {expense < 0
              ? "- R$ " + expense.replace(".", ",").replace("-", "")
              : "R$ " + expense.replace(".", ",")}
          </Expense>
        </ExpenseDiv>
      </WalletCardContent>
    </WalletCardContainer>
  );
};
