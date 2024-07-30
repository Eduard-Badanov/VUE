import { defineStore } from 'pinia'

export const useAllUsers = defineStore({
	id: 'users',
	state: () => ({
		allUsers: [
			{login: 'Admin', password: 'admin', isAdmin: true},
			{login: 'User', password: 'user', isAdmin: false}
		]
	}),
	actions: {
		addUser(newValue) {
			this.allUsers.push(newValue)
		},
		setAdmin(login) {
			this.allUsers.find(el => el.login === login).isAdmin = !this.allUsers.find(el => el.login === login).isAdmin
		}
	},
	getters: {
		getUsers() {
			return this.allUsers
		}
	}
})