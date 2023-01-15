import { getActiveTabURL } from "./utils.js";

const addNewBookmark = (bookmarksElement, bookmark) => {};

const viewBookmarks = (currentVideoBookmarks = []) => {
  const bookmarksElement = document.getElementById("bookmarks");
  bookmarksElement.innerHTML = "";

  if (currentVideoBookmarks.length > 0) {
    for (i = 0; i < currentVideoBookmarks.length; i++) {
      const bookmark = currentVideoBookmarks[i];
      addNewBookmark(bookmarksElement, bookmark);
    }
  } else {
    bookmarksElement.innerHTML = "<i class='row'>No bookmarks 55555</i>";
  }
};

const onPlay = () => {};

const onDelete = () => {};

const setBookmarkAttributes = () => {};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();
  const queryParameters = activeTab.url.split("?")[1];
  const urlParameters = new URLSearchParams(queryParameters);

  const currentVideo = urlParameters.get("v");

  if (activeTab.url.includes("youtube.com/watch") && currentVideo) {
    console.log("popup.js youtube watch ++++++++++++++++++++++++");
    chrome.storage.sync.get([currentVideo], (data) => {
      const currentVideoBookmarks = data[currentVideo]
        ? JSON.parse(data[currentVideo])
        : [];
      // viewBookmarks
      viewBookmarks(currentVideoBookmarks);
    });
  } else {
    console.log("else++++++++++++++++++++++++");
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML =
      '<div class="title">This is not a youtube video page 5555.</div>';
  }
});
