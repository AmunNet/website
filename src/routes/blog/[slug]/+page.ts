import type { PageLoad } from './$types';

import GhostContentAPI from '@tryghost/content-api';
  
const GHOST_URL = 'https://amun.pl';
const GHOST_KEY = '0fddb40f075ef7d86414cbc78e';
const GHOST_VERSION = 'v5.0';

export const load = (({ params }) => {
    const api = GhostContentAPI({
        url: GHOST_URL,
        key: GHOST_KEY,
        version: GHOST_VERSION})
    const postsJson = api.posts.browse({limit: 5, include: ['tags', 'authors']});

    return {
      props: {
        postsJson: postsJson
      }
    }
}) satisfies PageLoad;