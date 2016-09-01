import React, { Component } from 'react'
import { observer } from "mobx-react"
import User from "./User"

@observer
export default class UserList extends Component {

    render() {
        console.log("store: ", this.props.store)
        let users = this.props.store.users;
        console.log("users: ", users)
        users = users.map((elem, i) => (<User key={i} rank={i+1} username={elem.username} recent={elem.recent} alltime={elem.alltime} />))

        return (
            <tbody>
                {users}
            </tbody>
        )
    }
}
