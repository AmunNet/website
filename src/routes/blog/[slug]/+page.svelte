<script>
	export let data;
</script>
{#await data.post}
	<p>...loading</p>	
{:then post} 
<h2>{post?.title ?? ''}</h2>
<p>{@html post?.html ?? ''}</p>

{/await}

<!-- TODO: Add comments section-->