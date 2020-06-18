import React from 'react';
import styled from 'styled-components'

const TaskContainer = styled.div`
    display:grid;
    grid-template-columns: 30px 1fr 50px;
    justify-items:start;
    align-items:center;
    padding: 0 1rem;
    background-color:${({ color }) => color};
    width:100%;
    max-width:250px;
    margin: 1rem auto;
`

const TaskButton = styled.button`

`

const TaskText = styled.p`
    font-size:.8rem;
    color:#fff;
    text-decoration:${({ done }) => done ? 'line-through' : 'none'};
`

const Task = ({ color, title, done, handleCompleteTask }) => (
    <TaskContainer color={color}>
        <input
            type="checkbox"
            onChange={handleCompleteTask}
            defaultChecked={done}
        />
        <TaskText done={done}>{title}</TaskText>
        <TaskButton>Delete</TaskButton>
    </TaskContainer>
)

export default Task