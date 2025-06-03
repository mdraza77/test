// Custom JavaScript can be added here
// For example, you can add event listeners or other interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a click event to the 'Shop Now' button
    const shopNowButton = document.querySelector('.btn-light');
    shopNowButton.addEventListener('click', function() {
        alert('Shop Now button clicked!');
    });
});