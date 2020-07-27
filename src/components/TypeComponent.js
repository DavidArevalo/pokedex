import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

background: tomato;
  background: tomato;
  padding: 5px;
  width: 100px;
  height: 100px;
  margin: 10px;
  color: white;
  font-weight: bold;
  font-size: 1em;
  text-align: center;

  &:active {
    opacity: 0.5;
  }

  &:hover {
    background: #f6f9fc40;
    cursor: pointer;
  }
`
const InfoContainer = styled.div`
`
const Title = styled.h4`

`
const Text = styled.p`

`


const TypeComponent = ({ name='normal', pokemon}) => {
  return (
    <Container onClick={() => {
     // if(onClick) onClick({ name, type })
    }}>
      <InfoContainer>
        <Title>{name}</Title>
        <Text>{pokemon.length}</Text>
      </InfoContainer>
    </Container>
  )
}

export default TypeComponent;