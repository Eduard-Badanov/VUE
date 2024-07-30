<template>
	<div class="dialog" v-if="show" @click="hideDialog">
		<div @click.stop class="dialog__content">
			<div class="dialog__title">Add build:</div>
			<form class="dialog__inputs" @submit.prevent>
				<my-input	v-model.trim="build.name"	@input="changeUrlName" placeholder="Name" />
				<my-input v-model="build.urlName" placeholder="Url name" />
				<my-input v-model="build.body" placeholder="Body" />
				<my-input v-model="build.author" placeholder="Author" />
				<my-input v-model.number="build.price" placeholder="Price" />
				<my-input v-model="build.image" placeholder="Image" />
				<my-input v-model="build.isHit" placeholder="Is hit" />
				<my-button @click="addBuild" class="dialog__button">Add</my-button>
			</form>
		</div>
	</div>
</template>

<script>
import { useBuilds } from '@/stores/builds'
import { useParameters } from '@/stores/currentParameters'
export default {
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			build: {
				name: '',
				urlName: '',
				body: '',
				author: useParameters().login,
				price: '',
				image: './images/image.png',
				isHit: false,
			},
		}
	},
	methods: {
		changeUrlName() {
			this.build.urlName = this.build.name.toLowerCase().replace(/ /g, '-')
		},
		hideDialog() {
			this.$emit('update:show', false)
		},
		addBuild() {
			useBuilds().setBuild(this.build)
			this.build = {
				name: '',
				urlName: '',
				body: '',
				author: useParameters().login,
				price: '',
				image: './images/image.png',
				isHit: false,
			}
			this.hideDialog()
		}
	},
}
</script>

<style scoped lang="scss">
.dialog {
	top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
	z-index: 3;
  &__content {
    margin: auto;
    background: #fff;
    border-radius: 12px;
    min-height: 50px;
    min-width: 275px;
    padding: 20px;
		display: flex;
    flex-direction: column;
    align-items: center;
		gap: 10px;
  }
	&__inputs {
		display: flex;
		flex-direction: column;
		gap: 3px;
		& > button {
			margin-top: 5px;
		}
	}
}
</style>
