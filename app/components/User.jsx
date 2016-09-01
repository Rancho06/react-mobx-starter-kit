import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.rank}</td>
                <td>{this.props.username}</td>
                <td>{this.props.recent}</td>
                <td>{this.props.alltime}</td>
            </tr>
        )
    }
}
