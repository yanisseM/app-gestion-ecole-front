import React from 'react';
import styled from 'styled-components';


function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Titre de l'application</HeaderTitle>
        <HeaderNav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Ecole</a></li>
          <li><a href="#">Classe</a></li>
          </ul>
        </HeaderNav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #bdbdbd;
  padding: 16px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const HeaderNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 16px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
`;



export default Header;