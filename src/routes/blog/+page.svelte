<script>
	import Post from "$lib/components/Post.svelte";
	export let data;
</script>

{#each data.posts ?? [] as post}
	<Post {...post} />
{/each}