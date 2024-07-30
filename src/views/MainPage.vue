<template>
	<nav-bar class="builds__navbar" />
	<div class="builds">
		<div class="builds__title">All builds:</div>
		<my-input v-model='searchQuery' :modelValue='searchQuery' placeholder='Search by name...' />
		<my-button v-if="parameters.isAdmin" @click='dialogVisible = true' class="add-build__button">Add buid</my-button>
		<dialogAddBuild v-model:show='dialogVisible' @close='parameters.dialogVisible = false' />
		<div class="builds__content">
			<builds-list v-if='parameters.isAuth' :builds='searchBuilds' @remove='removeBuild'/>
			<span v-else style='color: red'>First you need to log in for see all builds</span>
		</div>
	</div>
</template>

<script>
import BuildsList from '@/components/BuildsList.vue'
import DialogAddBuild from '@/components/DialogAddBuild.vue'
import { useBuilds } from '@/stores/builds'
import { useParameters } from '@/stores/currentParameters'
export default {
	components: {
		BuildsList, DialogAddBuild
	},
	data() {
		return {
			parameters: useParameters(),
			searchQuery: '',
			builds: useBuilds().allBuilds.sort((build1, build2) => build1.price - build2.price),
			dialogVisible: false,
		}
	},
	methods: {
		removeBuild(build) {
			this.builds = this.builds.filter(el => el.name !== build.name)
		}
	},
	computed: {
		searchBuilds() {
			return [...this.builds].filter(el => el.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
		}
	}
}
</script>

<style scoped lang="scss">
.builds {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 0 15px;
	gap: 20px;
	&__title {
		padding-top: 20px;
	}
	&__content {
		padding-bottom: 30px;
	}
}
</style>