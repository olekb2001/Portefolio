// Select the video element
const mutedVideo = document.getElementById('kalde-føtter');

// Set the video to be muted
mutedVideo.muted = true;

// Set the starting time for the video (e.g., 15 seconds) on page load
mutedVideo.currentTime = 15;

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the video is in the viewport, play it
        if (entry.isIntersecting) {
            // Only start playing if the video is not already playing
            if (mutedVideo.paused) {
                mutedVideo.play();
            }
        } else {
            // Pause the video when it leaves the viewport
            mutedVideo.pause();
        }
    });
}, {
    // Trigger when 75% of the video is in the viewport
    threshold: 0.75
});

// Start observing the video element
observer.observe(mutedVideo);