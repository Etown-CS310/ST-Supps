function rateProduct(productId, rating) {
    // Clear all stars
    const stars = document.querySelectorAll(`#stars-${productId} .product-star`);
    stars.forEach(star => star.style.color = '#ddd');
    
    // Fill stars up to rating
    for(let i = 0; i < rating; i++) {
        stars[i].style.color = '#ffd700';
    }

    // Save rating
    const ratingDisplay = document.getElementById(`rating-display-${productId}`);
    ratingDisplay.textContent = `Current Rating: ${rating} stars`;

    // Store in localStorage
    const ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    ratings[productId] = rating;
    localStorage.setItem('ratings', JSON.stringify(ratings));
}

// Load saved ratings on page load
document.addEventListener('DOMContentLoaded', () => {
    const ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    for(let productId in ratings) {
        rateProduct(productId, ratings[productId]);
    }
});