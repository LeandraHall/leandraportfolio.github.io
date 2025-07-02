// Function to open the modal and display the clicked image
function openModal(imgElement) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "flex"; // Use flex to center the modal content
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt || "No description available"; // Set caption
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Event listeners for gallery images and modal close button
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".masonry .item img");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            openModal(img);
        });
    });

    const closeButton = document.getElementById("closeModal");
    closeButton.addEventListener("click", closeModal);

    // Optionally, close the modal when clicking outside the image
    const modal = document.getElementById("myModal");
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
