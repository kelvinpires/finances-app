import React, { useContext } from "react";
import { Header } from "../../components/Header";

import Illustration from "../../assets/main-home-illustration.svg";
import IconLeft from "../../assets/plus.svg";
import IconRight from "../../assets/list.svg";
import GoogleImg from "../../assets/btn-google.svg";
import {
  Description,
  DescriptionContainer,
  GoogleAuthImg,
  GoogleAuthLink,
  MainContainer,
  IllustrationContainer,
  IllustrationImg,
  Icon,
  DescriptionSubtitle,
} from "./styles";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const HomePage = () => {
  const { googleSignIn, googleLogInRedirect } = useContext(AuthContext);

  const handleGoogleLogIn = async () => {
    try {
      await googleSignIn();
      location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Header handleGoogleLogIn={googleLogInRedirect} />
      <MainContainer>
        <DescriptionContainer>
          <Description>Organize suas contas em um só lugar</Description>
          <DescriptionSubtitle>
            Gerencie seu dinheiro de uma maneira fácil e prática
          </DescriptionSubtitle>
          <GoogleAuthLink onClick={handleGoogleLogIn}>
            <GoogleAuthImg src={GoogleImg} alt="Ícone do Google" />
            Entrar com Google
          </GoogleAuthLink>
        </DescriptionContainer>
        <IllustrationContainer>
          <IllustrationImg src={Illustration} alt="Mulher usando o celular" />
          <Icon src={IconLeft} left bottom />
          <Icon src={IconRight} right top />
        </IllustrationContainer>
      </MainContainer>
    </>
  );
};
