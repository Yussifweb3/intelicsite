document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.slider .slides');

    carousels.forEach((carousel) => {
        let currentImageIndex = 0;
        const images = carousel.querySelectorAll('img');

        if (images.length > 0) {
            images[0].classList.add('active');
            
            setInterval(() => {
                images[currentImageIndex].classList.remove('active');
                currentImageIndex = (currentImageIndex + 1) % images.length;
                images[currentImageIndex].classList.add('active');
            }, 3000);
        }
    });
});

window.addEventListener('scroll', function () {
    const header = this.document.getElementById('SHIFT1');
    if(this.window.scrollY >100)
        {
            header.classList.add('scrolled');
        }
        else {
            header.classList.remove('scrolled')
        }
})
 // Function to create the YouTube player
 function onYouTubeIframeAPIReady() {
    document.querySelectorAll('.slides iframe').forEach(iframe => {
        const player = new YT.Player(iframe, {
            events: {
                'onReady': onPlayerReady
            }
        });
        iframe.player = player;
    });
}

// Function to handle the hover events
function onPlayerReady(event) {
    const iframe = event.target.getIframe();
    iframe.addEventListener('mouseenter', () => {
        event.target.playVideo();
    });
    iframe.addEventListener('mouseleave', () => {
        event.target.pauseVideo();
    });
}

// Load the IFrame Player API code asynchronously.
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
