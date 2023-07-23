import GhostContentAPI from '@tryghost/content-api';

export function load() {
    const GHOST_URL = 'https://amun.pl';
    const GHOST_KEY = '0fddb40f075ef7d86414cbc78e';
    const GHOST_VERSION = 'v5.0';

    const api = GhostContentAPI({
        url: GHOST_URL,
        key: GHOST_KEY,
        version: GHOST_VERSION})
    const postsJson = await api.posts.browse({limit: 5, include: ['tags', 'authors']});

    return {
        summaries: postsJson.map(post => ({
            title: post.title,
            slug: post.slug,
            publishedAt: post.published_at,
            excerpt: post.excerpt,
            tags: post.tags.map(tag => tag.name),
            authors: post.authors.map(author => author.name),
        })),
    };
}