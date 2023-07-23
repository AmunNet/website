<script lang="ts">
	// import Header from '$lib/header/Header.svelte';
	// import '../app.css';
</script>

<!-- <Header /> -->
<!-- TODO: Improve and adapt the import header -->
<svelte:head>
	<title>Amun IT Software - Blog</title>
	<meta name="description" content="In control of your information" />
	<link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet" />
</svelte:head>

<main>
	<slot />
</main>

<!--
<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
-->

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
