import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  
        state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  
  

  componentDidMount() {
    axios.get('/users/')
      .then(response => {
          
        if (response.data.length > 0) {
            this.setState({
                users: response.data.map((user) => user.userName),
                username: response.data[0].username
            })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername=(e)=> {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription=(e)=> {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration=(e)=> {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate=(date)=> {
    this.setState({
      date: date
    })
  }

  onSubmit=(e)=> {
    e.preventDefault();

    const exercise = {
      userName: this.state.username,
      describtion: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select 
              required
              className="form-control"
              onChange={this.onChangeUsername}>
                  <option selected disabled>select a user name</option>
              {
                this.state.users.map(function(user,index) {
                  return <option 
                    key={index}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}