import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './DogWalks.css';

class DogWalk extends Component {
    
    state= {
        walk: {
            questionOne: 0,
            questionTwo: '',
            questionThree: 0,
            questionFour: '',
            questionFive: '',
            questionSix: '',
            questionSeven: '',
            questionEight: '',
            questionNine: '',
            questionTen: '',
            date: '1000-01-01'
        }
    }
    handleChange = (event, type) => {
        console.log('walk added')
        this.setState({
            walk: {
                ...this.state.walk,
              [type]:event.target.value,
            }
        });
    }
    addNewWalk = event => {
        event.preventDefault();
        // this.props.dispatch({ type: 'ADD_WALK', payload: this.state.walk})
        this.setState({
            walk: {
                questionOne: 0,
                questionTwo: '',
                questionThree: 0,
                questionFour: '',
                questionFive: '',
                questionSix: '',
                questionSeven: '',
                questionEight: '',
                questionNine: '',
                questionTen: '',
                date: '1000-01-01'
            }
        });
    }
    saveWalk = (event) => {
        if(this.state.saveWalk === true){
        }else{
            this.props.dispatch ({type:'ADD_WALK', payload:this.state.walk})
            // this.props.history.push('/home')
        }
    }
    cancelWalk = (event) => {
        if(this.state.cancelMovie === true){
        }else{
            this.props.dispatch ({type:'CANCEL_WALK', payload:this.state.cancelWalk})
            this.props.history.push('/user')
        }
    }

    back = () => {
        this.props.history.push('/user')
    }
    next = () => {
        this.props.history.push('/walkHistory')
    }
    render(){
        return(
            
            <>
            <div className="body">
            <div className="text">
            <h3 className="font">Notes for Walk:</h3>
            <form onSubmit={this.addNewWalk}>
                
                <label> How many miles was the walk?:
                    <input type='number' value={this.state.questionOne}onChange={(event) => this.handleChange (event, 'questionOne')}/>
                </label>
                <br></br>
                <label> Walk time:
                    <input type='text' value={this.state.questionTwo}onChange={(event) => this.handleChange(event, 'questionTwo')}/>
                </label>
                <br></br>
                <label>Temp during walk:
                    <input type='number' value={this.state.questionThree}onChange={(event) => this.handleChange (event, 'questionThree')}/>
                </label>
                <br></br>
                <label>Describe precipitation, rain or snow?:
                    <input type='text' value={this.state.questionFour}onChange={(event) => this.handleChange(event, 'questionFour')}/>
                </label>
                <br></br>
                <label>Neighbor interactions:
                    <input type='text' value={this.state.questionFive}onChange={(event) => this.handleChange (event, 'questionFive')}/>
                </label>
                <br></br>
                <label>What dogs did we run into?:
                    <input type='text' value={this.state.questionSix}onChange={(event) => this.handleChange(event, 'questionSix')}/>
                </label>
                <br></br>
                <label>Describe leash pulling:
                    <input type='text' value={this.state.questionSeven}onChange={(event) => this.handleChange (event, 'questionSeven')}/>
                </label>
                <br></br>
                <label>Did the dog get off leash?:
                    <input type='text' value={this.state.questionEight}onChange={(event) => this.handleChange(event, 'questionEight')}/>
                </label>
                <br></br>
                <label>What wildlife did you see?:
                    <input type='text' value={this.state.questionNine}onChange={(event) => this.handleChange(event, 'questionNine')}/>
                </label>
                <br></br>
                <label>
                    Any additional notes for walk?:
                    <textarea value={this.state.questionTen}onChange={(event) => this.handleChange(event, 'questionTen')} />
                </label> 
                <br></br>
                <label>
                    Please enter the date:
                    <input type='date' value={this.state.date}onChange={(event) => this.handleChange(event, 'date')}/>   
                </label>   
                <br></br>             
                    <button onClick={this.saveWalk}>Save</button>
                    <button onClick={this.cancelWalk}>Cancel</button>
                    <button onClick={this.back}>Back</button>
                    <button onClick={this.next}>Walk History Page</button>
              </form>
              </div>
              </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(DogWalk);