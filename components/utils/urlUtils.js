export const addURLParams = (key, value) => {
  const url = new URL(window.location.href);
  // Add the query parameter to the URL
  url.searchParams.set(key, value);
  // Replace the current URL with the updated decode URL
  const decodedURL = decodeURIComponent(url.toString());
  const preservedState = history.state
  history.replaceState(preservedState, null, decodedURL);
};

export const removeURLParams = (key) => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  // Remove all search parameters
  searchParams.delete(key);
  const newUrl = url.origin + url.pathname + searchParams.toString();
  // Replace the current URL with the new URL
  const preservedState = history.state
  history.replaceState(preservedState, "", newUrl);
};

export const addURLSuffix = (suffix) => {
  const url = new URL(window.location.href);
  const decodedURL = decodeURIComponent(url.toString());

  if(decodedURL.includes(suffix)){
    return;
  }

  const preservedState = history.state
  history.replaceState(preservedState, null, `${decodedURL}/${suffix}`);
}
