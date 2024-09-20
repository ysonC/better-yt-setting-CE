// Check the user's preference and apply captions automatically when the page loads
chrome.storage.sync.get("captionsEnabled", (data) => {
    const captionsEnabled = data.captionsEnabled;
  
    console.log("Captions enabled setting retrieved:", captionsEnabled);
  
    if (captionsEnabled === true) {
      // Enable captions if the setting is enabled
      console.log("Enabling captions based on saved setting...");
      enableCaptions();
    } else if (captionsEnabled === false) {
      // Disable captions if the setting is disabled
      console.log("Disabling captions based on saved setting...");
      disableCaptions();
    } else {
      console.log("No caption setting found. Default behavior (no action).");
    }
  });
  
  // Function to enable captions on YouTube
  function enableCaptions() {
    const captionButton = document.querySelector(".ytp-subtitles-button");
  
    if (captionButton) {
      const isEnabled = captionButton.getAttribute("aria-pressed") === "true";
      if (!isEnabled) {
        captionButton.click(); // Enable captions if they are not already enabled
        console.log("Captions enabled.");
      } else {
        console.log("Captions are already enabled.");
      }
    } else {
      console.log("Caption button not found.");
    }
  }
  
  // Function to disable captions on YouTube
  function disableCaptions() {
    const captionButton = document.querySelector(".ytp-subtitles-button");
  
    if (captionButton) {
      const isEnabled = captionButton.getAttribute("aria-pressed") === "true";
      if (isEnabled) {
        captionButton.click(); // Disable captions if they are currently enabled
        console.log("Captions disabled.");
      } else {
        console.log("Captions are already disabled.");
      }
    } else {
      console.log("Caption button not found.");
    }
  }
  