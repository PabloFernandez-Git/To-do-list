import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import {generate as id} from 'shortid'
import allColors from './styles/colors'
import FormTask from './components/FormTask'
import Task from './components/Task'



const GlobalSyle = createGlobalStyle`
    body{
        font-family:sans-serif;
        background-color: #222;
        color:${allColors.mainColor};
        text-align: center;
        margin:0;
    }
`

class App extends Component {

    state = {
        colorSelected: allColors.colors[0],
        tasks: [
            {
                title: 'Aprender react',
                color: allColors.colors[0],
                done: false
            }
        ]
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChangeColor = (color) => {
        this.setState({ colorSelected: color })
    }

    render() {

        const { colorSelected, tasks } = this.state

        return (
            <>
                <GlobalSyle />
                <h1>To do list</h1>
                <FormTask
                    handleChangeColor={this.handleChangeColor}
                    handleSubmit={this.handleSubmit}
                    colorSelected={colorSelected}
                />
                <div>
                    {
                        tasks.map(task => (
                            <Task
                                key={id()} 
                                title={task.title}
                                color={task.color}
                            />
                        ))
                    }
                </div>
            </>

        )
    }
}

export default App;