import React from 'react'
import TypeComponent from './TypeComponent'
import styled from 'styled-components'

const Container = styled.div`
  padding: auto;
  margin: auto;
  width: 80%;
  align-content : flex-start
  list-style: none;
  border: 1px solid silver;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
`

// Renderizar una lista de tipos.
const TypeList = React.memo(({ types = [ ], onClick } ) => {
  return (
    <Container>
      {types.map((type, i) => {
        return (
          <TypeComponent onClick={onClick} key={`type-${i}`} {...type} />
        )
      })}
    </Container>
  )
})

export default TypeList;