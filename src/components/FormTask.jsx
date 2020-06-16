import React from 'react';
import styled from 'styled-components'
import allColors from '../styles/colors'
import ColorBox from './ColorBox';

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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto .5rem;
`

const FormTask = () => (
    <form>
        <Input name="title" type="text" />
        <ColorsContainer>
            {
                allColors.colors.map(color => (
                    <ColorBox /> 
                ))
            }
        </ColorsContainer>
        <Button>Add task</Button>
    </form>
)


export default FormTask;