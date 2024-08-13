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

export const extractIconifyIdentifier = (urlString) => {
  // Regular expression to match the main domain and multi-level extension
  const regex =
    /https?:\/\/(?:www\.)?((?:[^\/.]+\.)*[^\/.]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?)/;

  // Execute the regex on the input URL string
  const match = urlString.match(regex);

  if (match) {
    // Construct the Iconify identifier
    const iconifyIdentifier = match[1];

    return iconifyIdentifier;
  } else {
    // Return null if the regex doesn't match the input URL
    console.error("Invalid URL format");
    return null;
  }
};
