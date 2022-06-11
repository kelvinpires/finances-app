import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext/AuthContext";

import { HomePage } from "./pages/HomePage";
import { WalletPage } from "./pages/WalletPage";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user == null ? <HomePage /> : <Navigate to="/wallet" />}
          />
          <Route
            path="/wallet"
            element={
              user !== null ? <WalletPage user={user} /> : <Navigate to="/" />
            }
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
