const fetchJson = (url, options) => {
  return fetch(url, {
    ...options,
    credentials: 'include'
  }).then(r => {
    if (r.ok) {
      return { success: true, data: r.json() };
    } else {
      console.error(`Failed to fetch ${url}: ${r}`);
      return r.text(text => text);
    }
  }).then(json => {
    if (!json.success) {
      if (json.error) {
        throw new Error(json.error);
      }
      else if (json.messages) {
        throw new Error(json.messages.messages[0].value);
      } else {
        throw new Error(json);
      }
    }
    return json.data;
  });
};

function appendJson(url, params) {
  url =  url.endsWith('.json') ? url : url + '.json';

  if(params){
    return constructUrls(url, params);
  } else {
    return url;
  }
}

function constructUrls(initialUrl, params) {
  let parameterUrl = '';
  let keys = Object.keys(params);

  keys.forEach((parameter, index) => {
    if(params[parameter].toString() !== ''){
      parameterUrl = parameterUrl + parameter.toString() + '=' + params[parameter].toString();
      if(index !== keys.length -1){
        parameterUrl += '&';
      }
    }
  });

  if(parameterUrl.endsWith('&')) {
    parameterUrl = parameterUrl.slice(0, -1);
  }

  if(parameterUrl !== '') {
    return initialUrl + '?' + parameterUrl;
  } else {
    return initialUrl;
  }
}

export let getJson = (url, options={}, params) => {
  return fetchJson(appendJson(url, params), options);
};

export let postJson = (url, options={}) => {
  return fetchJson(appendJson(url), { ...options, method: 'POST' });
};

export let deleteJson = (url, options={}) => {
  return fetchJson(appendJson(url), { ...options, method: 'DELETE'});
}


export let putJson = (url, options={}) => {
  return fetchJson(appendJson(url), { ...options, method: 'PUT' });
};