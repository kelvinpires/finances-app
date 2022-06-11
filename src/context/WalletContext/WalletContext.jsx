import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { db } from "../../services/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useReducer } from "react";
import WalletReducer from "./WalletReducer";

export const INITIAL_STATE = {
  transaction: {
    pay: 0,
    receive: 0,
    title: "",
  },
};
export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [state, dispatch] = useReducer(WalletReducer, INITIAL_STATE);

  const [transactions, setTransactions] = useState([]);
  const { user } = useContext(AuthContext);

  const addTransference = async (data, transaction_name) => {
    try {
      dispatch({ type: "CREATE_TRANSACTION_START" });
      await addDoc(
        collection(db, user.uid),
        {
          title: transaction_name,
          pay: data.pay,
          receive: data.receive,
          date: data.date,
        },
        { merge: true }
      );
      dispatch({ type: "CREATE_TRANSACTION_SUCCESS" });
    } catch (err) {
      alert(err);
    }
  };

  const getTransactions = async () => {
    try {
      const transactionsRef = collection(db, user.uid);
      const data = await getDocs(transactionsRef);

      setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {}
  };

  const deleteTransaction = async (id) => {
    try {
      await deleteDoc(doc(db, user.uid, id));

      dispatch({ type: "DELETE_TRANSACTION_SUCCESS" });
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getTransactions();
  }, [state]);

  return (
    <WalletContext.Provider
      value={{
        addTransference,
        getTransactions,
        transactions,
        deleteTransaction,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}
