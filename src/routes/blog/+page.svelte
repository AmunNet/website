<script>
	import Post from "$lib/components/Post.svelte";
	export let data;
</script>

<header>
	<div id="background-image"></div>
	<div id="info">
		<h1>Discover the World<br> of Creation !</h1>
		<h4 style="font-family:monospace">Here you can find all the posts about my projects, and more!</h4>
	</div>
	<div id="image-trim"><img src="barbie_left.png" alt=""></div>
</header>

<section id="posts">
{#each data.posts ?? [] as post}
	<Post {...post} />
{/each}
</section>

<style>
	header {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		padding: 0 2rem;
	}
	#info {
		padding: 4rem 2rem;
	}
	#info h1 {
		text-align : left;
	}
	#background-image {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0; top: 0;
		background-image: url("/face-bg.jpg");
		background-position: center;
		background-size: cover;
		z-index: -1;
	}
	#background-image::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 0;
		background-image: -webkit-gradient(linear,left top,right top,color-stop(15%,rgba(45,45,58,.9)),color-stop(50%,rgba(45,45,58,.7)),to(rgba(43,43,53,.7)));
    	background-image: linear-gradient(90deg,rgba(45,45,58,.9) 15%,rgba(45,45,58,.7) 50%,rgba(43,43,53,.7) 100%);
	}
	img {
		height: 50rem;
		margin-bottom: -10rem;
	}
	#image-trim {
		margin-top: -5rem;
		overflow: hidden;
	}

	#posts {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
	}
</style>