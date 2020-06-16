import React from 'react';
import styled from 'styled-components'
import allColors from '../styles/colors'

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${allColors.mainColor};
    background: none;
    outline: none;
    color: ${allColors.mainColor};
`

const Button = styled.button`
    background-color: transparent;
    border: 1px solid ${allColors.mainColor};
    color: ${allColors.mainColor};
`

const ColorsContainer = styled.div`
    width: 150px;
    height: 50px;
    background-color: red;
`

const FormTask = () => (
    <form>
        <Input name="title" type="text" />
        <ColorsContainer></ColorsContainer>
        <Button>Add task</Button>
    </form>
)


export default FormTask;