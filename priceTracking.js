// Define product prices for different retailers
const productPrices = {
    'ryse-loaded-pre': {
        amazon: {
            price: 44.99,
            link: 'https://www.amazon.com/ryse-loaded-pre',
            inStock: true
        },
        vitaminShoppe: {
            price: 49.99,
            link: 'https://www.vitaminshoppe.com/ryse-loaded-pre',
            inStock: true
        },
        gnc: {
            price: 47.99,
            link: 'https://www.gnc.com/ryse-loaded-pre',
            inStock: false
        }
    },
    'c4-original': {
        amazon: {
            price: 29.99,
            link: 'https://www.amazon.com/c4-original',
            inStock: true
        },
        vitaminShoppe: {
            price: 32.99,
            link: 'https://www.vitaminshoppe.com/c4-original',
            inStock: true
        },
        gnc: {
            price: 34.99,
            link: 'https://www.gnc.com/c4-original',
            inStock: true
        }
    }
    // Add more products as needed
};

// Function to show retailer options
function showRetailerOptions(productId) {
    const retailers = productPrices[productId];
    if (!retailers) return;

    const optionsContainer = document.getElementById(`${productId}-retailers`);
    if (!optionsContainer) return;

    // Clear existing content
    optionsContainer.innerHTML = '';

    // Create retailer links
    Object.entries(retailers).forEach(([retailer, info]) => {
        const retailerDiv = document.createElement('a');
        retailerDiv.href = info.link;
        retailerDiv.target = '_blank';
        retailerDiv.className = 'retailer-link';
        
        retailerDiv.innerHTML = `
            <span class="retailer-name">${capitalizeFirstLetter(retailer)}</span>
            <span class="price">$${info.price.toFixed(2)}</span>
            <span class="stock-status ${info.inStock ? 'in-stock' : 'out-stock'}">
                ${info.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
        `;

        optionsContainer.appendChild(retailerDiv);
    });

    // Show the container
    optionsContainer.style.display = 'block';
}

// Helper function to capitalize retailer names
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to hide retailer options
function hideRetailerOptions(productId) {
    const optionsContainer = document.getElementById(`${productId}-retailers`);
    if (optionsContainer) {
        optionsContainer.style.display = 'none';
    }
}

// Export functions to use in HTML
window.showRetailerOptions = showRetailerOptions;
window.hideRetailerOptions = hideRetailerOptions;