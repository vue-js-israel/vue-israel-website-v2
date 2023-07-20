export const addURLParams = (key, value) => {
  const url = new URL(window.location.href);
  // Add the query parameter to the URL
  url.searchParams.set(key, value);
  // Replace the current URL with the updated decode URL
  const decodedURL = decodeURIComponent(url.toString());
  const preservedState = history.state;
  history.replaceState(preservedState, null, decodedURL);
};

export const removeURLParams = (key) => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  // Remove all search parameters
  searchParams.delete(key);
  const newUrl = url.origin + url.pathname + searchParams.toString();
  // Replace the current URL with the new URL
  const preservedState = history.state;
  history.replaceState(preservedState, "", newUrl);
};

export const addURLSuffix = (suffix) => {
  const url = new URL(window.location.href);
  const decodedURL = decodeURIComponent(url.toString());

  if (decodedURL.includes(suffix)) {
    return;
  }

  const preservedState = history.state;
  history.replaceState(preservedState, null, `${decodedURL}/${suffix}`);
};

export const socialIcon = (url) => {
  // Define the mapping of social media domains to MDI icon classes
  const socialMediaMapping = {
    "facebook.com": "mdi:facebook",
    "twitter.com": "mdi:twitter",
    "instagram.com": "mdi:instagram",
    "linkedin.com": "mdi:linkedin",
    "youtube.com": "mdi:youtube",
    "github.com": "mdi:github",
    // Add more social media domains and corresponding MDI icon classes as needed
  };

  // Remove the protocol part (http:// or https://)
  const cleanedUrl = url.replace(/^https?:\/\//, "");
  // Find the index of the first slash after the protocol
  const slashIndex = cleanedUrl.indexOf("/");
  // Extract the subdomain and domain name
  const subdomainAndDomain = cleanedUrl.substring(
    0,
    slashIndex !== -1 ? slashIndex : cleanedUrl.length
  );
  // Split the subdomain and domain name by dots
  const parts = subdomainAndDomain.split(".");
  // Extract the domain name
  const domainName = parts.slice(-2).join(".");
  // Look up the MDI icon class for the domain in the mapping
  const mdiIconClass = socialMediaMapping[domainName];
  return mdiIconClass || "mdi:web"; // Return the MDI icon class or an empty string if not found
};
