<script>
	import Card from "./Card.svelte";

</script>
<!--<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>-->

<!-- TODO: Add visit tracking -->

<svelte:head>
	<title>Amun IT Software</title>
	<meta name="description" content="In control of your information" />
	<link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet" />
</svelte:head>

<section>
	<video autoplay muted id="background">
		<source src="media/background.mp4" type="video/mp4" />
	</video>
    <Card />
</section>

<style>
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
}

#background {
position: fixed;
right: 0;
bottom: 0;
min-width: 100%;
min-height: 100%;
}

</style>
