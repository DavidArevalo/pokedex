import styled from "styled-components";

const Input = styled.input`
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid gray;
  margin-bottom: 0.2rem;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid #f74e84;
  }
`;
export default Input;
