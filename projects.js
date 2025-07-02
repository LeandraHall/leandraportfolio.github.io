document.addEventListener("DOMContentLoaded", function () {
    // Modal and modal content references
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementById('closeModal');
    const images = document.querySelectorAll('.item img'); // All images for opening the modal

    // Make sure the modal is hidden initially
    modal.style.display = "none"; // Hide modal when the page loads

    // Open modal when an image is clicked
    images.forEach((img) => {
        img.addEventListener('click', function () {
            modal.style.display = "block"; // Show modal
            modalImg.src = this.src; // Set the source of the image in the modal
            captionText.innerHTML = this.alt; // Set the caption of the image

            // Adjust image size to fit within the modal
            modalImg.onload = function () {
                const modalHeight = modal.offsetHeight;
                const imgHeight = modalImg.height;
                if (imgHeight > modalHeight) {
                    modalImg.style.maxHeight = '90%';
                }
            };
        });
    });

    // Close modal when close button (x) is clicked
    closeModal.onclick = function () {
        modal.style.display = "none"; // Hide modal
    };

    // Close modal when clicking anywhere outside the modal image
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide modal if outside clicked
        }
    };
});
