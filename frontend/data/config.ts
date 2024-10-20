export let URL = process.env.NEXT_PUBLIC_API_URL || '';

export const setURL = (url: string) => {
  URL = url;
};