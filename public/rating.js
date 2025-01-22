let currentProductId = '';

// Initialize star rating functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for stars
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            setStarRating(rating);
        });
    });
});

function showRatingModal(productId) {
    currentProductId = productId;
    document.getElementById('rating-modal').style.display = 'block';
    clearStarRating(); // Reset stars when opening modal
}

function closeRatingModal() {
    document.getElementById('rating-modal').style.display = 'none';
    currentProductId = '';
    document.getElementById('review-text').value = '';
    clearStarRating();
}

function setStarRating(rating) {
    const stars = document.querySelectorAll('.star-rating .star');
    stars.forEach(star => {
        const starRating = star.getAttribute('data-rating');
        if (starRating <= rating) {
            star.classList.add('selected');
            star.style.color = '#ffd700'; // Gold color for selected stars
        } else {
            star.classList.remove('selected');
            star.style.color = '#ccc'; // Grey color for unselected stars
        }
    });
}

function clearStarRating() {
    const stars = document.querySelectorAll('.star-rating .star');
    stars.forEach(star => {
        star.classList.remove('selected');
        star.style.color = '#ccc';
    });
}

function submitRating() {
    const selectedStars = document.querySelectorAll('.star-rating .selected').length;
    if (selectedStars === 0) {
        alert('Please select a rating');
        return;
    }

    const review = document.getElementById('review-text').value;
    
    // Get existing ratings from localStorage
    const ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    if (!ratings[currentProductId]) {
        ratings[currentProductId] = {
            totalStars: 0,
            numRatings: 0,
            reviews: []
        };
    }
    
    // Update ratings
    ratings[currentProductId].totalStars += selectedStars;
    ratings[currentProductId].numRatings += 1;
    if (review) {
        ratings[currentProductId].reviews.push({
            rating: selectedStars,
            text: review,
            date: new Date().toLocaleDateString()
        });
    }
    
    // Save to localStorage
    localStorage.setItem('ratings', JSON.stringify(ratings));
    
    // Update display
    updateRatingDisplay(currentProductId);
    closeRatingModal();
}

function updateRatingDisplay(productId) {
    const ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    const productRating = ratings[productId];
    const displayElement = document.getElementById(`rating-${productId}`);
    
    if (productRating && productRating.numRatings > 0) {
        const average = productRating.totalStars / productRating.numRatings;
        displayElement.textContent = `Rating: ${average.toFixed(1)} out of 5 (${productRating.numRatings} ratings)`;
    }
}