import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class TodoForm extends Component {
    state = {
        text: ''
    };

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type:'ADD_TASKS', payload: this.state});
        this.setState({
            text: ""
          });
    }


    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input name="text" value={this.state.text} onChange={(event) => this.handleChange(event)} placeholder="task"/>
            <button onClick={this.handleSubmit}>add todo</button>
          </form>
        );
      }
    }

    export default connect(mapStoreToProps)(TodoForm);
  