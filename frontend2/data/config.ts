// This need to be moved to an environment variable
export let URL = 'http://localhost:8055/';

export const setURL = (url: string) => {
  URL = url;
};