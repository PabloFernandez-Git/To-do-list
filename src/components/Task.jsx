import React from 'react';
import styled from 'styled-components'


const TaskContainer = styled.div`
    display: grid;
    grid-template-columns: 30px 1fr 50px;
`

const TaskButton = styled.button`

`

const TaskText = styled.p`

`

const Task = () => (
    <TaskContainer>
        <input type="checkbox" />
        <TaskText></TaskText>
        <TaskButton>Delete</TaskButton>
    </TaskContainer>
)

export default Task