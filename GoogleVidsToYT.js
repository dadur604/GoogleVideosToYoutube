var aTags = document.getElementsByTagName("a");
var searchText = "Videos";
var found;

for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].textContent == searchText) {
    found = aTags[i];
    break;
  }
}
const urlParams = new URLSearchParams(window.location.search);
const vidSearch = urlParams.get('q');
const uriSearch = encodeURIComponent(vidSearch)

found.href = "https://www.youtube.com/results?search_query=" + uriSearch
found.childNodes[1].data = "YouTube"