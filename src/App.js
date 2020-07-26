import React from "react"
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: TodosData
        }
        this.handleChange = this.handleChange.bind(this)
        this.adding = this.adding.bind(this)
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
    adding(){
        const addtodos=[...TodosData,{ id: this.state.todos.length, text: "text", completed: false }]
        console.log(addtodos)
        return{
            todos:addtodos
        }
    }
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        
        return (
            <div className="todo-list">
              <h2>YOUR TASKS :</h2>
              <div><p><input type="text" id="new" placeholder="Type here" /><button id="add" onClick={this.adding}>ADD</button></p></div>
                {todoItems}
            </div>
        )    
    }
}

export default App