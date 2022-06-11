import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { WalletProvider } from "./context/WalletContext/WalletContext";
import { GlobalStyles } from "./GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <WalletProvider>
        <GlobalStyles />
        <App />
      </WalletProvider>
    </AuthProvider>
  </React.StrictMode>
);
