import styled from "styled-components";
import { css } from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 649px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    height: calc(100vh - 20rem);
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 50%;
  @media screen and (max-width: 649px) {
    max-width: 90%;
    gap: 1rem;
    order: 1;
    text-align: center;
  }
`;

export const Description = styled.h1`
  font-size: 6.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: var(--orange);
  text-shadow: 0rem 0rem 0.1rem var(--text);

  @media screen and (max-width: 650px) {
    font-size: 5.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 4.2rem;
  }

  @media screen and (max-width: 1024px) and (max-height: 834px) {
    font-size: 5.2rem;
  }

  @media screen and (max-width: 400px) and (min-height: 700px) {
    font-size: 4.2rem;
  }
  @media screen and (max-width: 400px) and (max-height: 700px) {
    font-size: 4.2rem;
  }
`;

export const DescriptionSubtitle = styled.p`
  font-size: 3.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: var(--white);
  @media screen and (max-width: 650px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.6rem;
    margin-top: -1rem;
  }
  @media screen and (max-width: 1024px) and (max-height: 834px) {
    font-size: 2.2rem;
  }
`;

export const GoogleAuthImg = styled.img`
  max-width: 32px;
  min-width: 24px;
  max-height: 32px;
  min-height: 24px;
`;

export const GoogleAuthLink = styled.button`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 8rem;
  background-color: var(--light-bg);
  color: var(--text);
  font-size: 2.2rem;
  font-family: "Roboto", sans-serif;
  border: 0.2rem solid var(--light-bg);
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 500px) {
    margin-top: 1rem;
  }
`;

export const IllustrationContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 30rem;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 35rem;
  }

  @media screen and (max-width: 649px) {
    width: 30rem;
  }

  /* @media screen and (max-width: 500px) {
    width: 30rem;
  } */

  @media screen and (min-width: 1000px) {
    width: 35rem;
  }
  @media screen and (max-width: 1024px) and (max-height: 834px) {
    width: 30rem;
  }

  @media screen and (max-width: 425px) and (max-height: 834px) {
    width: 25rem;
  }

  @media screen and (max-width: 600px) and (max-height: 834px) {
    width: 25rem;
  }
  @media screen and (max-width: 400px) and (max-height: 800px) {
    width: 20rem;
  }
`;

export const IllustrationImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Icon = styled.img`
  position: absolute;
  ${(props) =>
    props.left &&
    props.bottom &&
    css`
      bottom: 20%;
      left: 0;
    `};
  ${(props) =>
    props.right &&
    props.top &&
    css`
      top: 40%;
      right: 0;
    `}
`;
