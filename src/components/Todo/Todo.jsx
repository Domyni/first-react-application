import React, { Component } from 'react';
import TodoList from './TodoList';
import './Todo.css';

class Todo extends Component {

    state = {
        task: "",
        countTask: 0,
        defaultNoTaskText: "Empty todo list, please add something",
        taskList: []
    };

    onChangeEvent = (e) => {
        // console.log(e.target)
        // console.log(e.target.value)
        this.setState({
            task: e.target.value
        });
    };

    onAddEvent = (e) => {
        e.preventDefault();
        if(this.state.task !== ""){
            this.props.filter(this.state.task);
            this.setState({
            countTask: this.state.countTask + 1,
            taskList: [...this.state.taskList, this.state.task.trim()],
            });
            // console.log(this.state.taskList);
        }
        this.setState({
            task:""
        });
    }

    render(){ 
        return (
            <div>
                <form>
                    <input type="text" name="task" value={this.state.task} onChange={this.onChangeEvent} />
                    <button type="submit" className="TodoBtn" onClick={this.onAddEvent}>Add Todo</button>
                    {this.state.countTask === 0 && (<p>{this.state.defaultNoTaskText}</p>)}
                </form>
                {this.state.taskList[0] !== undefined && (<TodoList list={this.state.taskList} />)}
            </div>
        );
    }
}

export default Todo;