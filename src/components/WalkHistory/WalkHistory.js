import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './WalkHistory.css';

class WalkHistory extends Component{
    state = {
        walk:'',
        walkHistory: []
    }
    componentDidMount(){
        this.getWalkHistory();
    }
    getWalkHistory(){
        console.log('in getWalkHistory')
        this.props.dispatch({type:'FETCH_WALK'})
    }
    getHistoricalWalk = () => {
        let inputDate = this.state.walk;
        let matchingWalk = this.props.store.newWalk.find(walk => walk.date.slice(0,10) == inputDate);
        console.log("matching walk", matchingWalk)
        console.log('inputDate', inputDate)
        this.setState({
            walkHistory: [matchingWalk]
        })

    }
    handleChange = (event) => {
        this.setState({
            walk: event.target.value
        })
    }
    back = () => {
        this.props.history.push('/user')
    } 

    forecast = () => {
        this.props.history.push('/forecast')
    }
    render (){
        return(
            <>
                <div className="body">
                <div className="text">
                <h2 className="font">Previous Walk:</h2>
                    <label>
                        Please enter the date:
                        <input type='date' onChange={(event) => this.handleChange(event)}/>   
                    </label> 
                    <button onClick={this.getHistoricalWalk}>View History</button>
                    <button onClick={this.back}>Daily Tasks</button>
                    <button onClick={this.forecast}>Go to Forecast</button>
                    {this.state.walkHistory.map((walk) => {
                        return(
                            <>
                                <div>How many miles was the walk?:{walk.question_one}</div>
                                <div>Walk time:{walk.question_two}</div>
                                <div>Temp during walk:{walk.question_three}</div>
                                <div>Describe precipitation, rain or snow?:{walk.question_four}</div>
                                <div>Neighbor interactions:{walk.question_five}</div>
                                <div>What dogs did we run into?:{walk.question_six}</div>
                                <div>Describe leash pulling:{walk.question_seven}</div>
                                <div>Did dog get off leash?{walk.question_eight}</div>
                                <div>What wildlife did you see?{walk.question_nine}</div>
                                <div>Any additional notes for walk?{walk.question_ten}</div>
                                <div>date:{walk.date.slice(0,10)}</div>
                            </>
                        
                        )
                    })}
                    </div>
                    </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(WalkHistory); 
