import React, { useState } from 'react'
import ButtonSearch from './ButtonSearch'
import styled from 'styled-components'

const ContainerForm = styled.form`
  display: flex;
  flex-direction: row;
  max-width: 25rem;
  border-radius: 15px;
  border: 2px solid red;
`;

export default function FormSearch({
    onSubmit,
    children,
    onClickButton,
    textButton = 'Enviar',
    ...rest
}) {
    const [query, setQuery] = useState({})

    const _handleSubmit = (e) => {
        e.preventDefault()
        if (onSubmit) onSubmit(query);
    }

    return (
        <ContainerForm
            {...rest}
            onSubmit={_handleSubmit}
            onChange={(e) => {
                if (e.target.name) {
                    setQuery({
                        ...query,
                        [e.target.name]: e.target.value,
                    })
                }
            }}
        >
            {children}
            <ButtonSearch type="submit" onClick={(e) => { if (onClickButton) onClickButton(e) }}>
                {textButton}
            </ButtonSearch>
        </ContainerForm>
    )
}