<script lang="ts">
    import { getChannelVideos, type YouTubeVideoAPIResponse } from "./YouTubeAPI";
    //Alternatively, use RSS feed:
    //https://www.youtube.com/feeds/videos.xml?channel_id=UC6RyUD_0p9Vq9Y1xZlBsE5g

    async function getVideos() {
        try {
            const videos: YouTubeVideoAPIResponse[] = await getChannelVideos("UC6RyUD_0p9Vq9Y1xZlBsE5g");
            return {
                videos
            };
        } catch (error) {
            console.error(error);
        }
    }
</script>

<h2>YouTube Feed</h2>
<section id="videos">
    {#await getVideos()}
    <p>Loading...</p>
    {:then data}
    {#each data?.videos ?? [] as video}
        <div class="video">
            <img src={video.thumbnails.low} alt={video.title} />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <a href="https://www.youtube.com/watch?v={video.videoId}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
        </div>
    {/each}
    {:catch error}
    <p style="color:red;">{error.message}</p>
    {/await}
</section>
<style>
    #videos {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
    .video {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
    }
    .video img {
        width: 100%;
        max-width: 300px;
        height: auto;
    }
    .video h3 {
        margin: 0.5rem 0;
    }
    .video p {
        margin: 0.5rem 0;
    }
    .video a {
        margin: 0.5rem 0;
    }
</style>