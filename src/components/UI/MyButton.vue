<template>
	<button class="my-button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'my-button',
}
</script>

<style scoped lang="scss">
.my-button {
	height: 30px;
	font-size: 14px;
	color: #fff;
	padding: 0 7px;
	border-radius: 5px;
	background: blue;
	border: 1px solid darkgrey;
	box-shadow: 0 2px 4px rgba(169, 169, 169, 0.658);
	font-family: 'JetBrains Mono';
	transition: all .1s ease-in-out;
	cursor: pointer;
	&:hover {
		background: rgb(2, 2, 225);
	}
	&:active {
		background: rgb(50, 50, 225);
	}
}
</style>
