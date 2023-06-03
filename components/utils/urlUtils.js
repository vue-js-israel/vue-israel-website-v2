export const addURLParams = (key, value) => {
  const url = new URL(window.location.href);
  // Add the query parameter to the URL
  url.searchParams.set(key, value);
  // Replace the current URL with the updated decode URL
  const decodedURL = decodeURIComponent(url.toString());
  history.replaceState(null, null, decodedURL);
};

export const removeURLParams = (key) => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  // Remove all search parameters
  searchParams.delete(key);
  const newUrl = url.origin + url.pathname + searchParams.toString();
  // Replace the current URL with the new URL
  history.replaceState(null, "", newUrl);
};
