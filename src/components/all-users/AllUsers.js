import React, {Component} from 'react';
import User from "../user/User";
import {UserService} from "../../services/UserService";

class AllUsers extends Component {
    userService = new UserService();
    state = {users: [], choose: null};

    constructor() {
        console.log('con');
        super();
    }

    // onSelectUser = (id) => {
    //     let {users} = this.state;
    //     let find = users.find(value => value.id === id);
    //     this.setState({choose: find});
    // };
    onSelectUser =(id) =>{
        this.userService.getUserByID(id).then(value => this.setState({choose:value}));
    }

    render() {
        let {users, choose} = this.state;
        return (

            <div>
                {
                    users.map(user => <User item={user} key={user.id} onSelectUser={this.onSelectUser}/>)

                }
                {
                    choose && <h2>{choose.id}-{choose.name}</h2>
                }

            </div>
        );
    }

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}));
    }

}export default AllUsers;