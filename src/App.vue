<template>
	<div id="app">
		<Nav />
		<Hero />
		<Banner class="mx-6" />
	</div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import Banner from "./components/Banner.vue";

export default {
	name: "App",
	components: {
		Nav,
		Hero,
		Banner,
	},
};
</script>
