<script>
	export let data;
</script>

<section>
	<article>
		<h2>{data.post.title ?? ''}</h2>
        <p>{@html data.post.html ?? ''}</p>
	</article>
</section>