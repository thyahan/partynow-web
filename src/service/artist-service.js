import { baseUrl } from './config';

export const Artist = {
  find: () => {
    return fetch(`${baseUrl}/artists`).then(res => {
      return res.status === 200 ? res.json() : false;
    });
  }
};
