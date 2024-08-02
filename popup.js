document.getElementById("extract").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "extract_transcript" },
      function (response) {
        document.getElementById("transcript").value = response.transcript;
      }
    );
  });
});

