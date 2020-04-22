import styled from "styled-components";
import fondo from "../assets/images/fondo.jpg";

const FondoApp = styled.section`
  background-image: url(${fondo});
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default FondoApp;
