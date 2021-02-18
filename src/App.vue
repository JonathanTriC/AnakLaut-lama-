<template>
	<div id="app">
		<Nav />
		<Hero />
	</div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";

export default {
	name: "App",
	components: {
		Nav,
		Hero,
	},
};
</script>
