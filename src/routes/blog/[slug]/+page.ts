import GhostContentAPI from '@tryghost/content-api';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const GHOST_URL = 'https://amun.pl';
    const GHOST_KEY = '0fddb40f075ef7d86414cbc78e';
    const GHOST_VERSION = 'v5.0';

    const api = GhostContentAPI({
        url: GHOST_URL,
        key: GHOST_KEY,
        version: GHOST_VERSION
    });

    try {
        const postJson = await api.posts.read({slug: params.slug}, {include: [ 'tags', 'authors']});

        return {
            post: {
                title: postJson.title? postJson.title : 'No title',
                slug: postJson.slug,
                feature_image: postJson.feature_image? postJson.feature_image : 'https://amun.pl/eye-of-ra.png',
                feature_image_alt: postJson.feature_image_alt? postJson.feature_image_alt : '',
                updated_at: postJson.updated_at,
                tags: postJson.tags!.map(tag => tag.name),
                authors: postJson.authors!.map(author => author.name),
                excerpt: postJson.excerpt? postJson.excerpt : '',
                html: postJson.html? postJson.html : '',
            }?? null,
        }
    }
    catch (error) {
        console.error(error);
    }
}