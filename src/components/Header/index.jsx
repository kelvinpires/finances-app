import React, { useContext, useState } from "react";
import {
  HeaderContainer,
  LinkRedirect,
  LogoContainer,
  LogoImg,
  LogoutBtn,
  SigninLink,
  UserImg,
  UserMenu,
  UserMenuContainer,
  UserImgContent,
  UserDisplayContainer,
  UserDisplayName,
} from "./styles";

import Logo from "../../assets/logo.svg";
import LogoTitle from "../../assets/LogoTitle.svg";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const Header = ({ handleGoogleLogIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
      location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <HeaderContainer>
      <LinkRedirect to="/">
        <LogoContainer>
          <LogoImg src={Logo} alt="Logo do site" />
          <LogoImg src={LogoTitle} alt="Título do site" />
        </LogoContainer>
      </LinkRedirect>

      {!user ? (
        <SigninLink onClick={handleGoogleLogIn}>Entrar</SigninLink>
      ) : (
        <UserMenuContainer>
          <UserDisplayContainer onClick={() => setMenuOpen(!menuOpen)}>
            <UserDisplayName>{user.displayName}</UserDisplayName>
            <UserImgContent>
              <UserImg src={user.photoURL} alt="Foto do usuário" />
            </UserImgContent>
          </UserDisplayContainer>
          <UserMenu isOpen={menuOpen}>
            <LogoutBtn onClick={handleLogout}>Sair</LogoutBtn>
          </UserMenu>
        </UserMenuContainer>
      )}
    </HeaderContainer>
  );
};
