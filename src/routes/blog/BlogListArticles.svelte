<script>
  let postsJson;

  (async () => {
    postsJson = await load();
    console.log(postsJson);
  })();
</script>

{#each postsJson as post}
    <article>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
    </article>
{/each}