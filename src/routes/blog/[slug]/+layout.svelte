<script>
	export let data;
</script>

<article>
	<slot />
</article>

<aside>
	<h2>Latest posts</h2>
	<ul>
		{#await data.posts}
			<p>...loading</p>
		{:then posts} 
		{#each posts ?? [] as post}
			<li>
				<a href="/blog/{post.slug}">{post.title}</a>
			</li>
		{/each}
		{/await}
	</ul>
</aside>

<style>

article {
	min-width: 20ch;
}

aside {
	grid-column: 2;
	width: 20ch;
}
</style>