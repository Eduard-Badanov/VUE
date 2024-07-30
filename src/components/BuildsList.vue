<template>
	<div class="builds__list">
		<build-item v-for="build in builds" :key="build.name" :build="build" @remove="$emit('remove', build)"/>
	</div>
</template>

<script>
import BuildItem from '@/components/BuildItem.vue'
export default {
	components: {
		BuildItem
	},
	props: {
		builds: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style scoped lang='scss'>
.builds__list {
	display: flex;
	justify-items: center;
	flex-wrap: wrap;
	gap: 20px;
}
</style>