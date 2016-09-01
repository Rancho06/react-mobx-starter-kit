import React, { Component } from 'react'
import UserStore from '../stores/UserStore'
import { API_recent, API_all } from '../stores/APIStore'
import UserList from './UserList'

export default class Page extends Component {

    fetchRecent(e) {
        UserStore.fetchRecentUsers()
    }

    fetchAll(e) {
        UserStore.fetchAllUsers()
    }

    render() {
        return (
            <div>
                <header className="row">
                    <h1>Free Code Camp</h1>
                </header>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Camper</th>
                                <th onClick={this.fetchRecent}>Points in Past 30 days</th>
                                <th onClick={this.fetchAll}>All time Points</th>
                            </tr>
                        </thead>
                        <UserList store={UserStore} />
                    </table>
                </div>
                <footer>
                    <p>CopyRight Shu Zhou 2016</p>
                </footer>
            </div>
        )
    }
}
