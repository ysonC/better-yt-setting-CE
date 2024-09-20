// Check the user's preference and apply captions when the page loads
chrome.storage.sync.get("captionsEnabled", (data) => {
  const captionsEnabled = data.captionsEnabled;
  console.log("Initial captions setting retrieved:", captionsEnabled);

  applyCaptionsWhenReady(captionsEnabled);  // Wait for the captions button
});

// Function to check for the captions button and apply the saved setting
function applyCaptionsWhenReady(captionsEnabled) {
  const checkInterval = setInterval(() => {
    const captionButton = document.querySelector(".ytp-subtitles-button");

    if (captionButton) {
      console.log("Caption button found.");
      clearInterval(checkInterval);  // Stop polling once the button is found

      // Apply the correct setting
      applyCaptionsSetting(captionsEnabled);
    } else {
      console.log("Waiting for caption button to load...");
    }
  }, 500);  // Check every 500ms
}

// Function to apply captions setting based on the stored preference
function applyCaptionsSetting(captionsEnabled) {
  const captionButton = document.querySelector(".ytp-subtitles-button");

  if (captionButton) {
    const isEnabled = captionButton.getAttribute("aria-pressed") === "true";
    if (captionsEnabled === true && !isEnabled) {
      captionButton.click(); // Enable captions if they are not already enabled
      console.log("Captions enabled.");
    } else if (captionsEnabled === false && isEnabled) {
      captionButton.click(); // Disable captions if they are currently enabled
      console.log("Captions disabled.");
    } else {
      console.log("Captions are already in the correct state.");
    }
  } else {
    console.log("Caption button not found.");
  }
}
