import styled from 'styled-components';
import fondoBlanco from '../assets/images/fondoblanco.jpg';
import fondoVerde from '../assets/images/fondoVerde.png';

const Container = styled.div`
  background-image: ${props => {
    if (props.bgi) return `url(${fondoVerde})`;
    return `#000`;
    }};
  background-size: cover;
  height: 100vh; /* Aqui posiblemente auto */
  width: 100vw;
`;

export default Container;