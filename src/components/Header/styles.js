import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  padding: 0 2rem;

  @media screen and (min-width: 500px) {
    padding: 0rem 5rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LogoImg = styled.img`
  max-width: 7rem;
  min-width: 3rem;
`;

export const LinkRedirect = styled(Link)`
  text-decoration: none;
`;

export const SigninLink = styled.button`
  font-size: 1.6rem;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  background-color: var(--orange);
  color: var(--dark-bg);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const UserMenuContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: max-content;
`;

export const UserDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserDisplayName = styled.h2`
  font-size: 1.8rem;
  color: var(--white);
  font-weight: 500;
  font-family: "Roboto", sans-serif;
`;

export const UserImgContent = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0.3rem solid var(--orange);
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserMenu = styled.div`
  text-align: center;
  padding: 0.5rem 0.5rem;
  border-radius: 0.3rem;
  background-color: var(--white);
  margin-top: 1rem;
  position: absolute;
  display: none;
  width: 100%;
  height: 10rem;
  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
      justify-content: center;
      align-items: flex-end;
      z-index: 10;
    `}
`;

export const LogoutBtn = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: transparent;
  color: var(--text);
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    background-color: var(--text);
    color: var(--white);
  }
`;
