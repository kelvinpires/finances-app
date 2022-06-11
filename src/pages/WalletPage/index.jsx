import React, { useState } from "react";
import { useContext } from "react";
import { Header } from "../../components/Header";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { Transaction } from "../../components/Transaction";
import { WalletCard } from "../../components/WalletCard";
import { WalletContext } from "../../context/WalletContext/WalletContext";
import { AddTransaction, WalletContainer } from "./styles";

export const WalletPage = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { transactions } = useContext(WalletContext);

  return (
    <>
      {user !== null && (
        <>
          <Header />
          <WalletContainer>
            <WalletCard />
            <AddTransaction onClick={() => setIsModalOpen(true)}>
              + Nova Transação
            </AddTransaction>
            {transactions && <Transaction />}
          </WalletContainer>
          <NewTransactionModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </>
      )}
    </>
  );
};
