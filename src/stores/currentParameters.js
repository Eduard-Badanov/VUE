import { defineStore } from 'pinia'

export const useParameters = defineStore({
	id: 'parameters',
	state: () => ({
		isAuth: true,
		login: 'Admin',
		password: null,
		isAdmin: true,
		dialogVisible: false
	}),
	actions: {
		setAuth(newValue) {
			this.isAuth = newValue
		},
		setLogin(newValue) {
			this.login = newValue
		},
		setPassword(newValue) {
			this.password = newValue
		},
		setIsAdmin(newValue) {
			this.isAdmin = newValue
		},
		setDialogVisible(newValue) {
			console.log('MESSAGE')
			this.dialogVisible = newValue
		}
	}
})