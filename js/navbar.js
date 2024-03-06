function showImage(imageId) {
    var image = document.getElementById(imageId);
    if (image) {
        image.style.display = "block";
    }
}

function hideImage(imageId) {
    var image = document.getElementById(imageId);
    if (image) {
        image.style.display = "none";
    }
}
