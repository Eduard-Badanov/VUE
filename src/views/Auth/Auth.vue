<template>
	<form class="auth" @submit.prevent>
		<div class="auth__title">Authorization</div>
		<div class="auth__inputs">
			<my-input v-model.trim="login" placeholder="Login" />
			<my-input v-model.trim="password" placeholder="Password" type='password' />
			<my-button @click='authorization' class="auth__login-button">Login</my-button>
		</div>
		<div v-if='invalidValues' class="auth__invalid-values">Invalid login or password</div>
		<div @click="$router.push('/auth/registration')" class="auth__logout">Not registered? Do this!</div>
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
			invalidValues: false,
			parameters: useParameters()
		}
	},
	methods: {
		authorization() {
			useAllUsers().allUsers.forEach((el) => {
				if (JSON.stringify({login: el.login, password: el.password}) === JSON.stringify({login: this.login, password: this.password})) {
					if (this.invalidValues) this.invalidValues = false
					this.parameters.setAuth(true)
					this.parameters.setLogin(this.login)
					this.parameters.setPassword(this.password)
					this.parameters.setIsAdmin(el.isAdmin)
					this.login = ''
					this.password = ''
					this.$router.push('/')
				} else {
					this.invalidValues = true
				}
			})
		}
	}
}
</script>

<style scoped lang="scss">
.auth {
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