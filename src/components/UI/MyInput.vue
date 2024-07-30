<template>
	<input :value='modelValue' @input='changeInput' class="my-input" type="text" />
</template>

<script>
export default {
	name: 'my-input',
	props: {
		modelValue: [String, Number]
	},
	methods: {
		changeInput(e) {
			this.$emit('update:modelValue', e.target.value)
		}
	}
}
</script>

<style scoped lang="scss">
.my-input {
	border: 1px solid darkgrey;
	background: mintcream;
	box-sizing: border-box;
	width: 200px;
	height: 30px;
	padding: 0 7px;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(169, 169, 169, 0.658);
	font-family: 'JetBrains Mono';
	transition: all .1s ease-in-out;
	&::placeholder {
		font-style: italic;
	}
	&::focus, &::active {
		border: none;
		outline: none
	}
}
</style>