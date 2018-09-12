/**
 * 
 * @param {String} url 
 */
const get = url => {
  return fetch(url).then(res => {
    return res.status === 200 ? res.json() : false;
  });
};

/**
 * 
 * @param {String} url 
 * @param {Object} data 
 */
const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    mode: 'same-origin',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data)
  }).then(res => {
    return res.status === 200 ? res.json() : false;
  });
};

export const find = baseUrl => {
  const url = baseUrl;
  return get(url);
};

/**
 * 
 * @param {String} baseUrl 
 * @param {String} id 
 */
export const findById = (baseUrl, id) => {
  const url = `${baseUrl}/${id}`;
  return get(url);
};

/**
 * 
 * @param {String} baseUrl 
 * @param {Object} data 
 */
export const create = (baseUrl , data = {}) => {
  const url = baseUrl;
  return post(url, data);
};

/**
 * 
 * @param {String} baseUrl 
 * @param {String} id 
 * @param {Object} data 
 */
export const patch = (baseUrl , id = '' , data = {}) => {
  const url = `${baseUrl}/${id}`;
  return post(url, data);
};

