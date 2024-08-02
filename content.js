chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "extract_transcript") {
    const videoId = getYouTubeVideoId();
    if (videoId) {
      fetchTranscript(videoId).then((transcript) => {
        sendResponse({ transcript: transcript });
      });
    } else {
      sendResponse({ transcript: "No YouTube video ID found." });
    }
    return true; // Indicates we will send a response asynchronously
  }
});

function getYouTubeVideoId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("v");
}

async function fetchTranscript(videoId) {
  try {
    const response = await fetch(
      `https://www.youtube.com/api/timedtext?lang=ar&v=${videoId}`
    );
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    const textNodes = xmlDoc.getElementsByTagName("text");
    let transcript = "";
    for (let node of textNodes) {
      transcript += node.textContent + " ";
    }
    return transcript.trim();
  } catch (error) {
    return `Error fetching transcript: ${error.message}`;
  }
}