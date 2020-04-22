import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #f6f9fc;
  display: flex;
  border: 2px solid gray;
  border-radius: 1rem;
  width: 100%;
  transition: background 0.2s ease-in-out;

  &:active {
    opacity: 0.5;
  }

  &:hover {
    background: #f6f9fc40;
    cursor: pointer;
  }
`

const AvatarContainer = styled.figure`
  width: 5rem;
  height: 5rem;
`
const Avatar = styled.img`
  width: 100%;
  height: auto;
`

const InfoContainer = styled.div`
`
const Title = styled.h4`

`
const Text = styled.p`

`


const PokeRow = ({ name='pikachu', type='electrico'}) => {
  return (
    <Container onClick={() => {
     // if(onClick) onClick({ name, type })
    }}>
      {/* <AvatarContainer>
        <Avatar src={image} />
      </AvatarContainer> */}

      <InfoContainer>
        <Title>{name}</Title>
        <Text>{type}</Text>
      </InfoContainer>
    </Container>
  )
}

export default PokeRow;