<template>
  <router-view></router-view>
</template>

<script>
import { useAllUsers } from '@/stores/users'
export default {
	data() {
		return {
			users: useAllUsers(),
			allUsers: useAllUsers().allUsers,
		}
	},
}
</script>

<style>
@font-face {
  src: '/public/fonts/JetBrainsMono-Regular.ttf';
  font-family: 'JetBrains Mono';
  font-weight: 400;
  font-style: normal
}
@font-face {
  src: '/public/fonts/JetBrainsMono-Italic.ttf';
  font-family: 'JetBrains Mono';
  font-weight: 400;
  font-style: italic
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box !important;
}
body {
  font-family: "JetBrains Mono";
  height: 100vh;
}
</style>