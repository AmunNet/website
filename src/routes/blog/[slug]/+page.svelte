<script>
	export let data;
	import { onMount } from 'svelte';
	import '$lib/components/Ghost/Post.css'
	import '$lib/components/Ghost/Prism-tomorrow-default.css'

	onMount(() => {
		const script = document.createElement("script");
		script.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js";
		script.integrity = "sha512-9khQRAUBYEJDCDVP2yw3LRUQvjJ0Pjx0EShmaQjcHa6AXiOv6qHQu9lCAIR8O+/D8FtaCoJ2c0Tf9Xo7hYH01Q==";
		script.crossOrigin = "anonymous";
		script.referrerPolicy="no-referrer";
		document.head.appendChild(script);

		const script2 = document.createElement("script");
		script2.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js";
		script2.integrity = "sha512-SkmBfuA2hqjzEVpmnMt/LINrjop3GKWqsuLSSB3e7iBmYK7JuWw4ldmmxwD9mdm2IRTTi0OxSAfEGvgEi0i2Kw==";
		script2.crossOrigin = "anonymous";
		script2.referrerPolicy="no-referrer";
		document.head.appendChild(script2);
	})
</script>
<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" integrity="sha512-vswe+cgvic/XBoF1OcM/TeJ2FW0OofqAVdCZiEYkd6dwGXthvkSFWOoGGJgS2CW70VK5dQM5Oh+7ne47s74VTg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

{#await data.post}
<p>...loading</p>	
{:then post} 
<h2>{post?.title ?? ''}</h2>
{@html post?.html ?? ''}
{/await}

<!-- TODO: Add comments section-->