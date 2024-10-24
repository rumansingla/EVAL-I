// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.querySelector('input[type="search"]');

    // Add event listener for the search button
    searchBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        const query = searchInput.value.toLowerCase();
        if (query) {
            alert(`Searching for: ${query}`);
            // Here you can implement actual s.earch logic (e.g., filtering books)
            // For now, it just shows an alert with the search query
        } else {
            alert('Please enter a search term.');
        }
    });

    // Get the "Shop Now" button
    const shopNowBtn = document.getElementById('shopnow');

    // Add click event for "Shop Now" button
    shopNowBtn.addEventListener('click', function() {
        window.location.href = 'product.html'; // Redirect to the products page
    });
});