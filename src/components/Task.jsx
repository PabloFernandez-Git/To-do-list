import React from 'react';
import styled from 'styled-components'


const TaskContainer = styled.div`
    display: grid;
    grid-template-columns: 30px 1fr 50px;
    justify-items: start;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    max-width: 250px;
    margin: 1rem auto;
    background-color: ${({color}) => color};
`

const TaskButton = styled.button`

`

const TaskText = styled.p`
    font-size: .8rem;
    color: #fff;
`

const Task = ({ color, title }) => (
    <TaskContainer color={color}>
        <input type="checkbox" />
        <TaskText>{title}</TaskText>
        <TaskButton>Delete</TaskButton>
    </TaskContainer>
)

export default Task