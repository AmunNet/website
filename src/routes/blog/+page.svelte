<script>
	import Tag from "$lib/components/Blog-Tag.svelte";
	import Header from "$lib/components/header/Blog-Header.svelte";

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Header />
<h2>Topics</h2>
<section id="tags">
{#each data.tags ?? [] as tag}
	<Tag {...tag} />
{/each}
</section>

<style>
	#tags {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
	}
</style>