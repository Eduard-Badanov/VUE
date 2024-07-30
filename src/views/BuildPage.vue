<template>
	<div class="build__information">
		<div class="build__information-title">This is an information page about {{ build.name }}</div>
		<div class="build__information-descriptions">Information about build:</div>
		<ul>
			<li class="build__description-key" v-for="(value, key) in build" :key="key">{{ key }}: {{ value }}</li>
		</ul>
		<my-button class="build__information-button" @click="$router.push('/')">Return to main page</my-button>
	</div>
</template>

<script>
import { useBuilds } from '@/stores/builds'
export default {
	data() {
		return {
			builds: useBuilds().allBuilds.sort(
				(build1, build2) => build1.price - build2.price
			),
			buildUrlName: this.$route.path.split('/')[2],
			build: null,
		}
	},
	methods: {
		renderBuildName() {
			this.build = [...this.builds].filter(
				el => el.urlName === this.buildUrlName
			)[0]
		},
	},
	beforeMount() {
		this.renderBuildName()
	},
}
</script>

<style scoped lang="scss">
.build__information {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	gap: 20px;
	&-title {
		text-decoration: underline;
	}
}
</style>