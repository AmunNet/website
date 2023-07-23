<script context='module'>
    import GhostContentAPI from '@tryghost/content-api';
  
    const GHOST_URL = 'https://amun.pl';
    const GHOST_KEY = '0fddb40f075ef7d86414cbc78e';
    const GHOST_VERSION = 'v5.0';
  
    export async function load() {
      const api = GhostContentAPI({
          url: GHOST_URL,
          key: GHOST_KEY,
          version: GHOST_VERSION})
      const postsJson = await api.posts.browse({limit: 5, include: ['tags', 'authors']});
  
      return {
        props: {
          postsJson: postsJson
        }
      }
    }
  </script>

<script>
  let postsJson;

  (async () => {
    postsJson = await load();
    console.log(postsJson);
  })();
</script>

<svelte:head>
	<title>Amun IT Software</title>
	<meta name="description" content="In control of your information" />
	<link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet" />
</svelte:head>

<section>
  
</section>