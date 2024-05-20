import React, { Component } from 'react';
import axios from 'axios';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            min: 0,
            max: 5
        };
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                this.setState({ users: res.data })
                console.log("data users",this.state.users);
            }).catch(err => console.log(err))
    }

    NextTODO=()=>{
        this.setState({min:this.state.min +5})
        this.setState({max:this.state.max +5})
        if(this.state.max >= this.state.users.length){
            this.setState({min:0})
            this.setState({max:5})
        }
    }
    PrevTODO=()=>{
        this.setState({min:this.state.min -5})
        this.setState({max:this.state.max -5})
        if(this.state.min < 1){
            this.setState({min:this.state.users.length-5})
            this.setState({max:this.state.users.length})
        }
    }
    render() {
        const { loading, users } = this.state;
        return (
            <div>
            {loading ? (
                    <div>Loading...</div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(users) &&
                                users.map(u => {
                                    
                                    
                                    if (u.id > this.state.min && u.id <= this.state.max) {
                                        return (
                                            <tr key={u.id}>
                                                <td>{u.id}</td>
                                                <td>{u.name}</td>
                                                <td>{u.email}</td>
                                            </tr>
                                        );
                                    }
                                
                                    return null;
                                })}
                        </tbody>
                    </table>
                )}
                <button className="btn btn-dark w-50" onClick={this.NextTODO}>Next</button>
                <button className="btn btn-dark w-50" onClick={this.PrevTODO}>Prev</button>
            </div>
        );
    }
}

export default Users;