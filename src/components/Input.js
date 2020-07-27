import styled from 'styled-components'

const Input = styled.input`
  border-radius: 0.5rem;
  background-color: transparent;
  padding: 0.5rem;
  font-size: 1rem;
  border: 0px solid transparent;
  width: 100%;

  &:focus {
    outline: none;
    background-color: transparent;
    border: 0px solid transparent;
    opacity: 0.9;
  }
`;
export default Input;