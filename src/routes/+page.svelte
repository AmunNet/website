<script>
	import { append } from "svelte/internal";
import Card from "./Card.svelte";
	import { onMount } from "svelte";

	onMount(() => {
		const app = document.getElementById("app");
		const script = document.createElement("script");
		script.type = "module";
		script.src = "/livematrix/livematrix.js";
		document.head.appendChild(script);
	});
</script>
<!--<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>-->

<!-- TODO: Add visit tracking -->

<svelte:head>
	<title>Amun IT Software</title>
	<meta name="description" content="In control of your information" />
	<link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet" />
	<link rel="stylesheet" href="/livematrix/livematrix.css">
</svelte:head>

<section>
	<video autoplay muted id="background">
		<source src="media/background.mp4" type="video/mp4" />
	</video>
    <Card />
</section>
<div id="app" class="tw-fixed"></div>

<style>
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
}

#app *{
	font-family:"Roboto",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

#background {
position: fixed;
right: 0;
bottom: 0;
min-width: 100%;
min-height: 100%;
}

</style>
