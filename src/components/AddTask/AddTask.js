import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoForm from '../TodoForm/TodoForm';
import mapStoreToProps from '../../redux/mapStoreToProps';
import "./AddTask.css" 

class AddTask extends Component{

    state = {
        todos: [],
        todoToShow: 'all'
    };

    componentDidMount(){
        this.getDailyPetTodo();
    }
    getDailyPetTodo(){
        console.log('in getDailyPetTodo')
        this.props.dispatch({type:'FETCH_DAILY_PET_TODO'})
        // this.setState({todos: this.props.store.dailyPetTodo})
    }
    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };

    toggleComplete = (todo) => {
        console.log('you are here', todo.completed, !todo.completed)
        this.props.dispatch({type:'UPDATE_COMPLETE_STATUS', payload:{id:todo.id, status: !todo.completed}})
        // this.setState({
        //     todos: this.state.todos.map(todo => {
        //         if (todo.id === id) {   
        //         return{
        //         ...todo,
        //         complete:!todo.complete
        //         };
        //         } else {
        //             return todo;
        //         }
        //     })
        // });
    }

    updateTodoToShow = s => {
        this.setState({
            todoToShow: s
        });
    }

    handleDeleteTodo (todo){
        this.props.dispatch({type:'DELETE_DAILY_PET_TODO', payload: {id:todo.id}})
    }
    setClass = (complete) => {
        if (complete) {
            return "linethrough"
        } else {
            return "notlinethrough"
        }
    }
  
    next = () => {
        this.props.history.push('/dogWalks')
    }
    render(){
        // let todos = [];

        // if (this.state.todoToShow === 'all') {
        //     todos = this.state.todos;
        // } else if (this.state.todoToShow === 'active') {
        //     todos = this.state.todos.filter(todo => !todo.complete);
        // } else if (this.state.todoToShow === "complete") {
        //     todos = this.state.todos.filter(todo => !todo.complete);
        // }
        return(
            <>
                <div className="test">
                <div className="text">
                    <div className="move">
                    <h2 className="font"> Daily Pet Todos! </h2>
                    </div>
                    <div className="move">
                    <TodoForm onSubmit={this.addTodo}/>
                        {this.props.store.dailyPetTodo.map(todo => (
                           <>
                           {/* <Todo 
                                // key={todo.id} 
                             
                                // // toggleComplete={() => this.toggleComplete(todo.id)} 
                                // onDelete={() => this.handleDeleteTodo(todo.id)}
                                // todo={todo}
                            /> */}
                        <p className={this.setClass(todo.completed)}onClick={() => this.toggleComplete(todo)}>{todo.tasks}</p>
                        <p>{todo.completed}</p>
                        <button onClick={() => this.handleDeleteTodo(todo)}>Delete</button>
                        </>
                        ))}
                        {/* <div>
                            todos left: {this.state.todos.filter(todo => !todo.complete).length}
                        </div> */}
                        <div>
                            <button onClick={this.next}>Go to Dog Walk Form</button>

                            {/* <button onClick={() => this.updateTodoToShow('all')}>all</button> */}
                            {/* <button onClick={() => this.updateTodoToShow('active')}>active</button>
                            <button onClick={() => this.updateTodoToShow('complete')}>complete</button> */}
                        </div>
                        </div>
                </div>
                </div>
                </>
  
        )
            
    }
}

export default connect(mapStoreToProps)(AddTask);


// state = {
    //     newTask: {
    //         task: '',
    //         completed: false,
    //     }
    // }

    // handleChange = (event, type) => {
    //     console.log('new task added')
    //     this.setState({
    //         ne wTask: {
    //             ...this.state.newTask,
    //           [type]:event.target.value,
    //         }
    //     });
    // }


    // addNewTask = event => {
    //     event.preventDefault();
    //     this.props.dispatch({ type: 'ADD_TASK', payload: this.state.newTask})
    //     this.setState({
    //         newTask: {
    //             task: ''
    //         }
    //     });
    // }