// Open Lightbox and display the selected image
function openLightbox(lightboxId) {
    document.getElementById(lightboxId).style.display = 'flex';
}

// Close Lightbox
function closeLightbox(lightboxId) {
    document.getElementById(lightboxId).style.display = 'none';
}

function changeLightboxImage(lightboxId, direction) {
    const lightbox = document.getElementById(lightboxId);
    const mainImage = lightbox.querySelector('img');
    const thumbnails = Array.from(lightbox.querySelectorAll('.thumbnail'));
    let currentIndex = thumbnails.findIndex(thumbnail => thumbnail.dataset.src === mainImage.src);

    // Add fade-out effect
    mainImage.classList.add('fade-out');

    // Delay image change to allow fade-out effect
    setTimeout(() => {
        if (direction === 0) {
            // Change to the first image (index 0)
            currentIndex = 0;
        } else {
            // Calculate new image index
            currentIndex += direction;

            // Handle wrapping around the image list
            if (currentIndex < 0) {
                currentIndex = thumbnails.length - 1; // Wrap to the last image
            } else if (currentIndex >= thumbnails.length) {
                currentIndex = 0; // Wrap to the first image
            }
        }

        // Set new main image
        mainImage.src = thumbnails[currentIndex].dataset.src;

        // Remove fade-out effect
        mainImage.classList.remove('fade-out');
    }, 500); // Match this duration with the CSS transition time
}

// Set main image when thumbnail is clicked
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const lightboxId = this.closest('.lightbox').id;
        setLightboxImage(lightboxId, this.dataset.src);
    });
});

// Set main image directly
function setLightboxImage(lightboxId, src) {
    const lightbox = document.getElementById(lightboxId);
    const mainImage = lightbox.querySelector('img');
    mainImage.classList.add('fade-out');

    setTimeout(() => {
        mainImage.src = src;
        mainImage.classList.remove('fade-out');
    }, 500); // Match this duration with the CSS transition time
}

function openOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'flex';
}

function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'none';
}
function openOverlay(id) {
    document.getElementById(id).style.display = "flex";
}

function closeOverlay(id) {
    document.getElementById(id).style.display = "none";
}

function openLightbox(id) {
    document.getElementById(id).style.display = "flex";
}

function closeLightbox(id) {
    document.getElementById(id).style.display = "none";
}

function setLightboxImage(lightboxId, imgSrc) {
    document.getElementById('lightbox-main-image-' + lightboxId.split('-')[1]).src = imgSrc;
}

function changeLightboxImage(lightboxId, direction) {
    let thumbnails = document.querySelectorAll(`#${lightboxId} .thumbnail`);
    let currentImage = document.getElementById('lightbox-main-image-' + lightboxId.split('-')[1]).src;
    let currentIndex = Array.from(thumbnails).findIndex(thumbnail => thumbnail.dataset.src === currentImage.split('/').pop());
    let nextIndex = (currentIndex + direction + thumbnails.length) % thumbnails.length;
    setLightboxImage(lightboxId, thumbnails[nextIndex].dataset.src);
}
