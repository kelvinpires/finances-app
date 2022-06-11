import React, { useContext, useState } from "react";
import {
  NewTransactionContainer,
  NewTransactionModalWrapper,
  NewTransactionTitle,
  Form,
  ActionContent,
  Input,
  InputRadio,
  ActionLabel,
  ActionImg,
  SubmitBtn,
  CloseModalContent,
  CloseModalImg,
} from "./styles";

import BarCode from "../../assets/barcode.svg";
import Dollar from "../../assets/dollar.svg";
import CloseModal from "../../assets/close-modal.svg";
import { WalletContext } from "../../context/WalletContext/WalletContext";

export const NewTransactionModal = ({ isModalOpen, setIsModalOpen }) => {
  const [transactionValue, setTransactionValue] = useState(0);
  const [transactionName, setTransactionName] = useState("");
  const [transactionData, setTransactionData] = useState("");
  const [isPayed, setIsPayed] = useState(null);
  const [isReceived, setIsReceived] = useState(null);

  const { addTransference } = useContext(WalletContext);

  const handleTransactionSubmit = (e) => {
    e.preventDefault();
    console.log(isPayed);
    console.log(isReceived);
    if (isPayed) {
      addTransference(
        {
          title: transactionName,
          pay: -transactionValue,
          receive: 0,
          date: transactionData,
        },
        transactionName
      );
    }
    if (isReceived) {
      addTransference(
        {
          title: transactionName,
          pay: 0,
          receive: +transactionValue,
          date: transactionData,
        },
        transactionName
      );
    }
    setTransactionValue(0);
    setTransactionName("");
    setTransactionData("");

    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(false);

    setTransactionValue(0);
    setTransactionName("");
    setTransactionData("");
  };

  return (
    <NewTransactionContainer isOpen={isModalOpen}>
      <NewTransactionModalWrapper>
        <NewTransactionTitle>Nova Transação</NewTransactionTitle>
        <CloseModalContent onClick={handleModalOpen}>
          <CloseModalImg src={CloseModal} alt="Fechar o modal" />
        </CloseModalContent>
        <Form onSubmit={handleTransactionSubmit}>
          <ActionContent>
            <InputRadio
              type="radio"
              id="pay"
              name="transaction_type"
              value="pay"
              className="pay"
              onChange={(e) => {
                setIsPayed(e.target.value);
                setIsReceived(null);
              }}
            />
            <ActionLabel className="pay_label" htmlFor="pay">
              <ActionImg src={BarCode} alt="Ícone de pagamento" />
              Pagar
            </ActionLabel>

            <InputRadio
              type="radio"
              id="receive"
              name="transaction_type"
              value="receive"
              className="receive"
              onChange={(e) => {
                setIsReceived(e.target.value);
                setIsPayed(null);
              }}
            />
            <ActionLabel className="receive_label" htmlFor="receive">
              <ActionImg src={Dollar} alt="Ícone de dinheiro para receber" />
              Receber
            </ActionLabel>
          </ActionContent>
          <Input
            type="text"
            id="transaction_name"
            name="transaction_name"
            placeholder="Nome da transação"
            value={transactionName}
            required
            onChange={(e) => setTransactionName(e.target.value)}
          />
          <Input
            type="date"
            id="transaction_data"
            name="transaction_data"
            required
            value={transactionData}
            onChange={(e) => setTransactionData(e.target.value)}
          />
          <Input
            type="number"
            id="transaction_value"
            name="transaction_value"
            placeholder="0,00"
            min="0.01"
            step="0.01"
            value={transactionValue}
            required
            onChange={(e) => {
              setTransactionValue(e.target.value);
            }}
          />

          <SubmitBtn onClick={handleTransactionSubmit} type="submit">
            Enviar
          </SubmitBtn>
        </Form>
      </NewTransactionModalWrapper>
    </NewTransactionContainer>
  );
};
