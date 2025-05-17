export let URL = process.env.NEXT_PUBLIC_DIRECTUS_BASE_URL || '';

export const setURL = (url: string) => {
  URL = url;
};