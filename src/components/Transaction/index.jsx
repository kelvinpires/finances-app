import React from "react";
import {
  EditImg,
  TransactionBody,
  TransactionContainer,
  TransactionDate,
  TransactionEditButton,
  TransactionEditContent,
  TransactionImg,
  TransactionInfoBox,
  TransactionPlaceContainer,
  TransactionTitle,
  TransactionValue,
  TransactionValueContainer,
  TransactionWrapper,
} from "./styles";

import BarCodeRed from "../../assets/barcode-white.svg";
import DollarGreen from "../../assets/dollar-white.svg";
import DeleteImg from "../../assets/delete.svg";
import { useContext } from "react";
import { WalletContext } from "../../context/WalletContext/WalletContext";

import { useEffect } from "react";
import { useState } from "react";
import { DeleteModal } from "../DeleteModal";

export const Transaction = () => {
  const { transactions, getTransactions } = useContext(WalletContext);
  const [isDeleteActionVisible, setIsDeleteActionVisible] = useState(false);
  const [transactionData, setTransactionData] = useState({ id: "", title: "" });

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionBody>
      <TransactionContainer>
        {transactions &&
          transactions.map((transaction) => {
            const { pay, receive, title, date, id } = transaction;

            const newDate = new Date(date).toLocaleDateString();

            return (
              <TransactionWrapper isPayed={pay < 0 ? true : false} key={id}>
                <TransactionPlaceContainer>
                  {pay < 0 ? (
                    <TransactionImg isPayed src={BarCodeRed} />
                  ) : (
                    <TransactionImg src={DollarGreen} />
                  )}
                  <TransactionInfoBox>
                    <TransactionTitle>{title}</TransactionTitle>
                    <TransactionDate>{newDate}</TransactionDate>
                  </TransactionInfoBox>
                </TransactionPlaceContainer>
                <TransactionValueContainer>
                  <TransactionValue isPayed={pay < 0 ? true : false}>
                    {pay < 0
                      ? "- R$ " +
                        pay.toFixed(2).replace("-", "").replace(".", ",")
                      : "+ R$ " + receive.toFixed(2).replace(".", ",")}
                  </TransactionValue>
                </TransactionValueContainer>
                <TransactionEditContent
                  onClick={() => {
                    setIsDeleteActionVisible(true);
                    setTransactionData({ id: id, title: title });
                  }}
                >
                  <TransactionEditButton>
                    <EditImg src={DeleteImg} alt="Excluir transação" />
                  </TransactionEditButton>
                </TransactionEditContent>
              </TransactionWrapper>
            );
          })}
      </TransactionContainer>
      <DeleteModal
        setIsDeleteActionVisible={setIsDeleteActionVisible}
        isDeleteActionVisible={isDeleteActionVisible}
        id={transactionData.id}
        transactionName={transactionData.title}
      />
    </TransactionBody>
  );
};
