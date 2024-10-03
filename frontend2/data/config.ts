// This need to be moved to an environment variable
export let URL = 'http://host.docker.internal:8055';

export const setURL = (url: string) => {
  URL = url;
};