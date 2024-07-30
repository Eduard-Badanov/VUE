<template>
	<div class="navbar">
		<div @click="$router.push('/')" class="navbar-name">Oneas Studio</div>
		<div>
			<my-button v-if="parameters.isAdmin" @click="$router.push('/users')" class="navbar-button">All users</my-button>
		</div>
		<div class="navbar-auth">
			<div v-if="!parameters.isAuth" class="navbar-auth__buttons">
				<my-button @click="$router.push('/auth')">Log in</my-button>
				<my-button @click="$router.push('/auth/registration')">Log on</my-button>
			</div>
			<div v-else class="navbar-auth__login">
				<div class="auth__login-status">
					<span v-if="parameters.isAdmin">admin</span>
					<span v-else>user</span>
				</div>
				<div class="auth__login-title">{{ parameters.login }}</div>
				<img @click="parameters.setAuth(false), $router.push('/auth')" src="/images/log-out.svg" class="auth__logout-img"	/>
			</div>
		</div>
	</div>
</template>

<script>
import { useParameters } from '@/stores/currentParameters'
export default {
	name: 'nav-bar',
	data() {
		return {
			parameters: useParameters(),
		}
	},
}
</script>

<style scoped lang="scss">
.navbar {
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	padding: 10px;
	background: #1299a5;
	border-radius: 0 0 5px 5px;
	box-shadow: 0 2px 4px rgba(169, 169, 169, 0.658);
	&-name {
		color: #fff;
		font-size: 20px;
		font-weight: 500;
		&:hover {
			cursor: pointer;
		}
	}
	&-auth {
		& > div {
			display: flex;
			gap: 10px;
			cursor: pointer;
			& > button {
				width: 80px;
				height: 30px;
				border-radius: 5px;
				border: 1px solid darkblue !important;
				box-shadow: 0 2px 4px rgba(36, 36, 36, 0.658) !important;
			}
		}
		&__login {
			color: #fff;
			font-size: 16px;
			font-weight: 500;
			display: flex;
			align-items: center;
			& > img {
				width: 18px;
				height: 18px;
			}
		}
	}
}
.navbar-button {
	border: 1px solid darkblue !important;
	box-shadow: 0 2px 4px rgba(36, 36, 36, 0.658) !important;		
}
.auth__login-status {
	font-size: 12px;
	background: #fff;
	color: #000;
	padding: 1px 5px;
	border-radius: 3px;
	// border: 1px solid darkblue !important;
	// text-shadow: 0 2px 4px rgba(36, 36, 36, 0.658) !important;		
}
</style>
