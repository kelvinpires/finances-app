import { WarningOctagon } from "phosphor-react";
import React from "react";
import { useContext } from "react";

import { WalletContext } from "../../context/WalletContext/WalletContext";

import {
  ButtonsContainer,
  DeleteButton,
  DeleteMessage,
  DeleteMessageBox,
  DeleteText,
  ModalDeleteContainer,
  ModalDeleteWrapper,
} from "./styles";

export const DeleteModal = ({
  setIsDeleteActionVisible,
  isDeleteActionVisible,
  transactionName,
  id,
}) => {
  const { deleteTransaction } = useContext(WalletContext);

  const handleDelete = async () => {
    try {
      await deleteTransaction(id);

      setIsDeleteActionVisible(false);
    } catch (err) {}
  };

  return (
    <ModalDeleteContainer isVisible={isDeleteActionVisible}>
      <ModalDeleteWrapper>
        <DeleteText>Excluir "{transactionName}"</DeleteText>
        <DeleteMessageBox>
          <WarningOctagon size={40} color="#fff" weight="bold" />
          <DeleteMessage>
            Esta ação excluirá permanentemente a transação
          </DeleteMessage>
        </DeleteMessageBox>
        <ButtonsContainer>
          <DeleteButton onClick={() => setIsDeleteActionVisible(false)} cancel>
            Cancelar
          </DeleteButton>
          <DeleteButton onClick={handleDelete}>Excluir</DeleteButton>
        </ButtonsContainer>
      </ModalDeleteWrapper>
    </ModalDeleteContainer>
  );
};
