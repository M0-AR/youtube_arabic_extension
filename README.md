This Chrome extension consists of four main files:

manifest.json: Defines the extension's properties and permissions.
popup.html: The HTML structure for the extension's popup.
popup.js: Handles the interaction in the popup and communicates with the content script.
content.js: Runs in the context of the YouTube page, extracting the video ID and fetching the transcript.

To use this extension:

Create a new directory and save each file with its respective name and content.
Open Chrome and go to chrome://extensions/.
Enable "Developer mode" in the top right corner.
Click "Load unpacked" and select the directory containing your extension files.

Now, when you're on a YouTube video page:

Click the extension icon in your Chrome toolbar.
Click the "Extract Transcript" button in the popup.
If an Arabic transcript is available, it will appear in the textarea.

Please note:

This extension attempts to fetch the Arabic transcript directly from YouTube's API. It may not work for all videos, especially those without Arabic captions.
The extension requires permission to access YouTube pages to function.
This is a basic implementation and may need error handling and UI improvements for a production-ready extension.