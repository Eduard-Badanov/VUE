<template>
	<div class="all-users">
		<div class="all-users__title">All users:</div>
		<li v-for="user in users" :key="user.login">Login: "{{ user.login }}", Password: "{{ user.password }}", IsAdmin: "{{ user.isAdmin	}}"<my-button @click="setAdmin(user.login)" style="margin-left: 10px">Edit admin status</my-button></li>
		<my-button class="all-users__button" @click="$router.push('/')">Return to main page</my-button>
	</div>
</template>

<script>
import { useAllUsers } from '@/stores/users'
export default {
	data() {
		return {
			users: useAllUsers().allUsers,
			setAdmin: useAllUsers().setAdmin
		}
	},
}
</script>

<style scoped lang="scss">
.all-users {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	gap: 20px;
	&__title {
		text-decoration: underline;
	}
}
</style>
