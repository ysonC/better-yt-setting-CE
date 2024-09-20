document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleCaptions");

    // Retrieve the current state of captions from Chrome storage
    chrome.storage.sync.get("captionsEnabled", (data) => {
        const captionsEnabled = data.captionsEnabled;

        // Set initial button text based on stored setting
        if (captionsEnabled === true) { toggleButton.textContent = "Always Off"; }
        else { toggleButton.textContent = "Always On"; }
    });

    // Handle button click to toggle the captions setting
    toggleButton.addEventListener("click", () => {
        // Get the current state from storage
        chrome.storage.sync.get("captionsEnabled", (data) => {
            const captionsEnabled = data.captionsEnabled;

            // Toggle the state: if true, turn off; if false, turn on
            if (captionsEnabled === true) {
                // Set captions to be disabled
                chrome.storage.sync.set({ captionsEnabled: false }, () => {
                    console.log("Captions will now always be disabled.");
                    toggleButton.textContent = "Always On"; // Update button text
                });
            } else {
                // Set captions to be enabled
                chrome.storage.sync.set({ captionsEnabled: true }, () => {
                    console.log("Captions will now always be enabled.");
                    toggleButton.textContent = "Always Off"; // Update button text
                });
            }
        });
    });
});
