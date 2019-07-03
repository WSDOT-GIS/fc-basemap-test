/**
 * Creates a div containing a link to the source code for the currently
 * running app.
 *
 * If hosted on github pages, URL will be based on current URL.
 * Otherwise a default will be used.
 * @param fallbackUrl URL that will be used if running page is NOT
 * hosted on Github Pages (github.io)
 */
export function createSourceLink(
  fallbackUrl = "https://github.com/wsdot-gis/fc-basemap-test"
) {
  const re = /https\:\/\/([^.]+).github.io\/([^\/]+)\/?/;
  const match = location.href.match(re);
  const sourceUrl = match
    ? `https://github.com/${match[1]}/${match[2]}`
    : fallbackUrl;

  const a = document.createElement("a");
  a.href = sourceUrl;
  a.classList.add("source-link__anchor");
  a.innerText = "Source";
  a.target = "_blank";
  a.rel = "noreferrer";

  const div = document.createElement("div");
  div.appendChild(a);
  div.classList.add("source-link", "esri-widget");

  return div;
}
