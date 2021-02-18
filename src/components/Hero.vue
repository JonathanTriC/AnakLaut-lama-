<template>
	<!-- <div class="flex w-full h-full">
		<img :src="image" alt="gambar hero" />
	</div> -->
	<div class="hero">
		<img :src="image" alt="gambar hero" />
		<div class="text-white ">
			<div class="p-24">
				<h1 class="mb-7 text-5xl font-bold">
					Laut Kami, <br />
					Untuk Kami.
				</h1>

				<button class="btn btn-primary">Jelajahi</button>
			</div>
		</div>
	</div>
</template>

<script>
import heroImg from "../assets/images/design/hero-img.png";

export default {
	data: function() {
		return {
			image: heroImg,
		};
	},
	name: "Hero",
};
</script>
