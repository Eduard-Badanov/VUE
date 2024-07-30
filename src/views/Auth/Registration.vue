<template>
	<form class="auth-reg" @submit.prevent>
		<div class="auth-reg__title">Registration</div>
		<div class="auth-reg__inputs">
			<my-input v-model.trim="login" placeholder="Login" />
			<my-input v-model.trim="password" placeholder="Password" type='password' />
			<my-input v-model.trim="passwordConfirmation" placeholder="Password confirmation" type='password' />
			<my-button @click='registration' class="auth-reg__login-button">Register</my-button>
		</div>
		<div v-if='registationError !== false' class="auth-reg__invalid-values">{{ registationError }}</div>
		<div @click="$router.push('/auth')" class="auth-reg__logout">Do you alredy have an account? Do this!</div>
	</form>
</template>

<script>
import { useParameters } from '@/stores/currentParameters'
import { useAllUsers } from '@/stores/users'
export default {
	data() {
		return {
			login: '',
			password: '',
			passwordConfirmation: '',
			invalidValues: false,
			registationError: false,
			parameters: useParameters()
		}
	},
	methods: {
		checkAvailibility() {
			return useAllUsers().allUsers.some(el => el.login === this.login)
		},
		registration() {
			if (this.login.length === 0 && this.password.length === 0) {
				this.registationError = 'Login or password is invalid'
			} else if (this.checkAvailibility()) {
				this.registationError = 'User with this login already exists'
			} else if (this.password.length < 6) {
				this.registationError = 'Password should be at least 6 characters long'
			}	else if (this.password !== this.passwordConfirmation) {
				this.registationError = 'Passwords do not match'
			}	else {
				useAllUsers().addUser({login: this.login, password: this.password, isAdmin: false})
				this.registationError = false
				this.parameters.setAuth(true)
				this.parameters.setLogin(this.login)
				this.parameters.setPassword(this.password)
				this.login = ''
				this.password = ''
				this.$router.push('/')
			}
		}
	}
}
</script>

<style scoped lang='scss'>
.auth-reg {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	gap: 10px;
	width: max-content;
	margin: 0 auto;
	&__inputs {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
	}
	&__login-button {
		width: 100%;
		margin-top: 5px;
	}
	&__logout {
		font-size: 14px;
		&:hover {
			text-decoration: underline;
		}
	}
	&__invalid-values {
		font-size: 14px;
		color: red
	}
}
</style>