<template>
	<div class="build-item">
		<div v-if="build.isHit" class="build-item__hit">HIT</div>
		<img :src="build.image" class="build-item__image" />
		<div class="build-item__content">
			<div class="build-item__name">build: <br />{{ build.name }}</div>
			<div v-if="build.price !== 0" class="build-item__price">{{ build.price }} rub</div>
			<div v-else class="build-item__price">For free</div>
			<div class="build-item__author">by {{ build.author }}</div>
			<div style="display: flex; gap: 5px">
				<my-button @click='$router.push(`/build/${build.urlName}`)' class="build-item__button">Open</my-button>
				<my-button v-if='isAdmin' @click='builds.deleteBuild(build.name), $emit("remove", build)' class="build-item__button">Delete</my-button>
			</div>
		</div>
	</div>
</template>

<script>
import { useBuilds } from '@/stores/builds'
import { useParameters } from '@/stores/currentParameters'
export default {
	props: {
		build: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			isAdmin: useParameters().isAdmin,
			builds: useBuilds()
		}
	}
}
</script>

<style scoped lang='scss'>
.build {
	&-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 264px;
		height: 380px;
		background: tan;
		padding: 10px 0;
		border-radius: 5px;
		&__content {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;
			height: 100%;
			width: 236px;
    	margin: auto;
			padding-top: 5px;
		}
		&__hit {
			position: absolute;
			z-index: 2;
			font-size: 16px;
			background: #ff0000;
			color: #fff;
			padding: 3px 10px;
			border-radius: 10px;
			margin-left: 5px;
    	margin-top: -5px;
			text-transform: uppercase;
		}
		&__image {
			position: relative;
			margin: auto;
			width: 236px;
			height: 236px;
			border-radius: 5px;
		}
		&__button {
			padding: 0 7px;
		}
	}
}
</style>