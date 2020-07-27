import styled from 'styled-components'

const ButtonSearch = styled.button`
  background-color: ${props => {
    if (props.bg) return props.bg;
    return 'transparent'
  }};
  color: black;
  border-style: hidden;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
`;

export default ButtonSearch