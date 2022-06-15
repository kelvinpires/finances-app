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
    setBalance(
      total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
    setExpense(
      payTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
    setReceive(
      receiveTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
  };

  useEffect(() => {
    handleCalc();
  }, [transactions]);

  return (
    <WalletCardContainer>
      <WalletCardContent>
        <ReceiveDiv>
          <ItemLabel>Seus Ganhos</ItemLabel>
          <Receive>{receive}</Receive>
        </ReceiveDiv>
        <TotalDiv>
          <ItemLabel>Saldo disponível</ItemLabel>
          <TotalMoney>{balance}</TotalMoney>
        </TotalDiv>
        <ExpenseDiv>
          <ItemLabel>Seus Gastos</ItemLabel>
          <Expense>{expense}</Expense>
        </ExpenseDiv>
      </WalletCardContent>
    </WalletCardContainer>
  );
};
