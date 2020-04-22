import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => {
    if (props.bg) return props.bg;
    return "#FFFFFF";
  }};
  padding: 1rem;
  border-color: ${(props) => {
    if (props.bc) return props.bc;
    return "#FFFFFF";
  }};
  color: ${(props) => {
    if (props.color) return props.color;
    return "#FFFFFF";
  }};
  width: 15rem;
  border-radius: 0.313rem;
  text-transform: uppercase;
`;

export default Button;
