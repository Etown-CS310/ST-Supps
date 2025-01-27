function toggleReview(productId) {
    // Close all other review dropdowns first
    const allDropdowns = document.querySelectorAll('.review-dropdown');
    allDropdowns.forEach(dropdown => {
        if (dropdown.id !== `review-dropdown-${productId}`) {
            dropdown.style.display = 'none';
        }
    });

    const dropdown = document.getElementById(`review-dropdown-${productId}`);
    if (dropdown.style.display === 'none' || !dropdown.style.display) {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function submitReview() {
    const reviewText = document.querySelector('.review-text').value;
    if (reviewText.trim() === '') {
        alert('Please write a review before submitting');
        return;
    }
    
    // Save review
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const productId = 'ryse-loaded'; // You can make this dynamic if needed
    
    if (!reviews[productId]) {
        reviews[productId] = [];
    }
    
    reviews[productId].push({
        text: reviewText,
        date: new Date().toLocaleDateString()
    });
    
    localStorage.setItem('reviews', JSON.stringify(reviews));
    
    // Clear and close review section
    document.querySelector('.review-text').value = '';
    toggleReview();
    
    alert('Review submitted successfully!');
}