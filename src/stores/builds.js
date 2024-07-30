import { defineStore } from 'pinia'

export const useBuilds = defineStore({
	id: 'builds',
	state: () => ({
		allBuilds: [
			{
				name: 'Black Minimal',
				urlName: 'black-minimal',
				body: 'This is a first build Oneas Studio',
				author: 'Sacok',
				image: './images/image.png',
				price: 600,
				isHit: true
			},
			{
				name: 'Forza Five',
				urlName: 'forza-five',
				body: 'This is a second popular build Oneas Studio',
				author: 'Eduardik',
				image: './images/image.png',
				price: 799,
				isHit: true
			},
			{
				name: 'Old Style',
				urlName: 'old-style',
				body: 'This is a first old build for new version of project',
				author: 'Sacok',
				image: './images/image.png',
				price: 1400,
				isHit: false
			},
			{
				name: 'Grand Game',
				urlName: 'grand-game',
				body: 'This is a first build, which incuding hud in GTA 5',
				author: 'Malinovskiy',
				image: './images/image.png',
				price: 700,
				isHit: false
			},
			{
				name: 'Windows Style',
				urlName: 'windows-style',
				body: 'This is the first build that was added through a contest',
				author: 'Eduardik',
				image: './images/image.png',
				price: 0,
				isHit: false
			},
		]
	}),
	actions: {
		deleteBuild(name) {
			console.log(name);
			this.allBuilds = [...this.allBuilds].filter((el) => el.name !== name)
		},
		setBuild(build) {
			this.allBuilds.push(build)
		}
	}
})