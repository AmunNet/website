<script lang="ts">
import { onMount } from "svelte";

onMount(() => {
	// const app = document.getElementById("app");
	const script = document.createElement("script");
	script.type = "module";
	script.src = "/livematrix/livematrix.js";
	document.head.appendChild(script);
});
</script>

<svelte:head>
    <link rel="stylesheet" href="/livematrix/livematrix.css">
</svelte:head>

<aside id="app" class="tw-fixed"></aside>