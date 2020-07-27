import React from "react"
import TodoItem from "./TodoItem"

import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            inputtext:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.adding = this.adding.bind(this)
        this.changeText = this.changeText.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            
            return {
                todos: updatedTodos
            }
        })
    }
    
    changeText(e){
        const {name,value}=e.target
        
        this.setState({
            [name]:value
        })
    
    }
    adding(e){    
        e.preventDefault() 
        if(this.state.inputtext!==""){     
        this.setState({
            todos:[...this.state.todos,{ id: this.state.todos.length, text: this.state.inputtext, completed: false }],
            inputtext:""
        })
    }
    }
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        
        return (
            <div className="todo-list">
              <h2>YOUR TASKS :</h2>
              <form onSubmit={this.adding}><p>
              <input type="text" id="new" name="inputtext" value={this.state.inputtext} placeholder="Type here" onChange={this.changeText} />
              <button id="add">ADD</button>
              </p>
              </form>
              {todoItems}                
            </div>
        )    
    }
}

export default App
