<script lang="ts">
	import { page } from "$app/stores";
	import Post from "$lib/components/Blog-Post.svelte";
	import Header from "$lib/components/header/Blog-Header.svelte";
	export let data;
    const posts = data.posts?.filter(post => post.tags.some(tag => $page.params.slug === tag));
</script>

<Header />
<h2>Posts</h2>
<section id="posts">
{#each posts ?? [] as post}
	<Post {...post} />
{/each}
</section>

<style>
	#posts {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
	}
</style>