import { getActiveTabURL } from "./utils";

const addNewBookmark = () => {};

const viewBookmarks = () => {};

const onPlay = () => {};

const onDelete = () => {};

const setBookmarkAttributes = () => {};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();
  const queryParameters = activeTab.url.split("?")[1];
  const urlParameters = new URLSearchParams(queryParameters);

  const currentVideo = urlParameters.get("v");

  if (activeTab.url.includes("youtube.com/watch") && currentVideo) {
    chrome.storage.sync.get([currentVideo], (data) => {
      const currentVideoBookmarks = data[currentVideo]
        ? JSON.parse(data[currentVideo])
        : [];
    });

    // viewBookmarks
  }
});
