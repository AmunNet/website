<script lang="ts">
	export let title: string,
		slug: string,
		feature_image: string,
		feature_image_alt: string,
		updated_at: string,
		tags: (string | undefined)[],
		authors: string[],
		excerpt: string;

	const date = new Date(updated_at);
	const time = date.toLocaleTimeString('pl-PL', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});
</script>

<a id="post" data-sveltekit-preload-data="hover" href={`/blog/${slug}`}>
	<img loading="lazy" src={feature_image} alt={feature_image_alt} />
	<div id="post-text">
		<h1>{title}</h1>
		<p id="post-text-p">{@html excerpt}</p>
		<div id="info">
		{#each authors as author}
			<p>{author}</p>
		{/each}
			<p>{time}</p>
		</div>
	</div>
</a>

<style>
	#post {
		position: relative;
		z-index: 10;
		display: grid;
		grid-template-columns: auto auto;
		grid-gap: 3vw;
		width: 80%;
		height: 20vh;
		margin-left: 10%;
		margin-bottom: 2%;
		padding: 16px;
		border-radius: 12px;
		background-color: #202327;
	}

	#post-text {
		width: 52vw;
		margin-right: 3vw;
		display: grid;
	}

	#post-text-p {
		margin-left: 3%;
		height: 8vh;
	}

	#info {
		display: flex;
		justify-content: space-between;
		border-top: 1px solid var(--on-tertiary);
		margin-left: 3%;
	}

	h1 {
		color: var(--secondary);
		margin-top: 0%;
		font-size: 48px;
	}

	p {
		color: var(--on-tertiary);
		width: fit-content;
	}

	img {
		justify-self: center;
		width: 20vw;
		max-height: 20vh;
		border-radius: 10px;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		translate: 8px 0px;
		text-decoration: none !important;
	}

	@media (max-width: 800px) {
		#post {
			grid-template-columns: auto;
			grid-template-rows: auto auto;
			grid-gap: 1vh;
			width: 85%;
			height: 50vh;
			margin-left: auto;
			margin-right: auto;
		}

		#post-text {
			width: 100%;
			margin-right: 0;
			display: grid;
		}

		#post-text-p {
			margin-left: 0;
			height: 20vh;
		}

		#info {
			margin-left: 0;
			margin-top: -10%;
		}

		img {
			width: 100%;
			max-height: 25vh;
			border-radius: 10px;
		}
	}
</style>