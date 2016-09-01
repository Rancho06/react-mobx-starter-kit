import { observable, computed } from 'mobx'
import { API_recent, API_all } from './APIStore'
import $ from 'jquery'

class UserStore {
    @observable users = []

    constructor() {
        $.get(API_recent, (data) => {
            this.users = data
            console.log("Initial Data is fetched!", data)
        })
    }

    fetchRecentUsers(e) {
        $.get(API_recent, (data) => {
            this.users = data
            console.log("Recent Data is fetched!", data)
        })
    }

    fetchAllUsers(e) {
        $.get(API_all, (data) => {
            this.users = data
            console.log("All Data is fetched!", data)
        })
    }
}

export default new UserStore()
