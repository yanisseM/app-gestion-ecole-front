import styled from "styled-components";
function Footer() {
    return (
      <FooterContainer>
        <p>&copy; 2023 - Tous droits réservés</p>
      </FooterContainer>
    );
  }


  const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #bdbdbd;
  color: #fff;
  padding: 16px;
  text-align: center;
`;



  export default Footer;