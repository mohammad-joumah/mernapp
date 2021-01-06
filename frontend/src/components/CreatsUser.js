import { Component } from "react";
import axios from "axios";


export default class CreateUser extends Component {

    submint = (event) => {
        event.preventDefault();
        const username=event.target.username.value;
        axios.post('/users/add',{username})
        .then(()=>{console.log('user is created')})
    }
    render() {
        return (
            
            <form onSubmit={this.submint} className="form-group">
                <label>User Name:</label>
                <input type="text" className="form-control col-md-5 mb-2" name="username" />
                <button type="submit" className="btn btn-success">
                    Create User
                </button>
            </form>
        )
    }
}