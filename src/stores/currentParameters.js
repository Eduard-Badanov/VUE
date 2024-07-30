import { defineStore } from 'pinia'

export const useParameters = defineStore({
	id: 'parameters',
	state: () => ({
		isAuth: false,
		login: null,
		password: null,
		isAdmin: false,
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
			this.dialogVisible = newValue
		}
	}
})