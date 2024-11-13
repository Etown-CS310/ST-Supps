// Define all products
const productPrices = {
    // Pre-Workout Products
    'ryse-loaded-pre': {
        amazon: {
            price: 37.99,
            link: 'https://www.amazon.com/RYSE-Up-Supplements-Supplement-Citrulline/dp/B09J9CJ4QB/',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 44.99,
            link: 'https://www.vitaminshoppe.com/p/ultra-pre-freedom-rocks-11-1-oz-powder/rys0010',
            inStock: true,
            history: []
        },
        gnc: {
            price: 44.99,
            link: 'https://www.gnc.com/pre-workout-supplements/556513.html',
            inStock: true,
            history: []
        }
    },
    'c4-original': {
        amazon: {
            price: 29.99,
            link: 'https://www.amazon.com/Cellucor-Original-Pre-Workout-Watermelon/dp/B09MXJN8RK/',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 32.99,
            link: 'https://www.vitaminshoppe.com/p/c4-original-icy-blue-razz-60-servings/ux-1030',
            inStock: true,
            history: []
        },
        gnc: {
            price: 34.99,
            link: 'https://www.gnc.com/pre-workout-supplements/802363.html',
            inStock: true,
            history: []
        }
    },
    'gorilla-mode': {
        amazon: {
            price: 49.99,
            link: 'https://www.amazon.com/Gorilla-Mode-Pre-Workout/dp/B08MZZDP35',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 52.99,
            link: 'https://www.vitaminshoppe.com/gorilla-mode',
            inStock: true,
            history: []
        },
        gnc: {
            price: 54.99,
            link: 'https://www.gnc.com/gorilla-mode',
            inStock: false,
            history: []
        }
    },
    'ghost-legend': {
        amazon: {
            price: 44.99,
            link: 'https://www.amazon.com/GHOST-LEGEND-Pre-Workout-Collaboration/dp/B09QXJ3B89',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 49.99,
            link: 'https://www.vitaminshoppe.com/ghost-legend',
            inStock: true,
            history: []
        },
        gnc: {
            price: 49.99,
            link: 'https://www.gnc.com/ghost-legend',
            inStock: true,
            history: []
        }
    },
    'gold-standard-pre': {
        amazon: {
            price: 32.99,
            link: 'https://www.amazon.com/OPTIMUM-NUTRITION-Standard-Pre-Workout-Beta-Alanine/dp/B01MQGHQSS',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 34.99,
            link: 'https://www.vitaminshoppe.com/gold-standard-pre',
            inStock: true,
            history: []
        },
        gnc: {
            price: 36.99,
            link: 'https://www.gnc.com/gold-standard-pre',
            inStock: true,
            history: []
        }
    },
    'cbum-thavage': {
        amazon: {
            price: 49.99,
            link: 'https://www.amazon.com/cbum-pre-workout',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 54.99,
            link: 'https://www.vitaminshoppe.com/cbum-pre',
            inStock: true,
            history: []
        },
        gnc: {
            price: 52.99,
            link: 'https://www.gnc.com/cbum-pre',
            inStock: true,
            history: []
        }
    },

    // Protein Products
    'farm-fed-protein': {
        amazon: {
            price: 49.99,
            link: 'https://www.amazon.com/Axe-Sledge-Farm-Fed-Protein/dp/B09NMWP7NQ',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 54.99,
            link: 'https://www.vitaminshoppe.com/farm-fed-protein',
            inStock: true,
            history: []
        },
        gnc: {
            price: 52.99,
            link: 'https://www.gnc.com/farm-fed-protein',
            inStock: true,
            history: []
        }
    },
    'iso100-protein': {
        amazon: {
            price: 84.99,
            link: 'https://www.amazon.com/Dymatize-ISO100-Protein-Powder-Pebbles/dp/B098TN6N8G',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 89.99,
            link: 'https://www.vitaminshoppe.com/p/iso-100-fruity-pebbles/dy-1059',
            inStock: true,
            history: []
        },
        gnc: {
            price: 89.99,
            link: 'https://www.gnc.com/dymatize-iso100-protein',
            inStock: true,
            history: []
        }
    },
    'mre-lite-protein': {
        amazon: {
            price: 44.99,
            link: 'https://www.amazon.com/Redcon1-MRE-Lite-Protein/dp/B07Y5PKHN4',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 49.99,
            link: 'https://www.vitaminshoppe.com/p/mre-lite-protein/red1011',
            inStock: true,
            history: []
        },
        gnc: {
            price: 47.99,
            link: 'https://www.gnc.com/redcon1-mre-lite',
            inStock: false,
            history: []
        }
    },
    'ghost-protein': {
        amazon: {
            price: 44.99,
            link: 'https://www.amazon.com/ghost-whey-protein',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 49.99,
            link: 'https://www.vitaminshoppe.com/ghost-protein',
            inStock: true,
            history: []
        },
        gnc: {
            price: 47.99,
            link: 'https://www.gnc.com/ghost-protein',
            inStock: true,
            history: []
        }
    },
    'ryse-protein': {
        amazon: {
            price: 39.99,
            link: 'https://www.amazon.com/RYSE-Loaded-Protein',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 44.99,
            link: 'https://www.vitaminshoppe.com/ryse-protein',
            inStock: true,
            history: []
        },
        gnc: {
            price: 42.99,
            link: 'https://www.gnc.com/ryse-protein',
            inStock: true,
            history: []
        }
    },
    'podium-protein': {
        amazon: {
            price: 49.99,
            link: 'https://www.amazon.com/podium-hwpo-protein',
            inStock: true,
            history: []
        },
        vitaminShoppe: {
            price: 54.99,
            link: 'https://www.vitaminshoppe.com/podium-protein',
            inStock: true,
            history: []
        },
        gnc: {
            price: 52.99,
            link: 'https://www.gnc.com/podium-protein',
            inStock: true,
            history: []
        }
    }
};

// Function to update prices
function updatePrice(productId, retailer, newPrice, isInStock) {
    if (productPrices[productId] && productPrices[productId][retailer]) {
        const product = productPrices[productId][retailer];
        const currentDate = getCurrentDate();
        
        // Save old price to history
        product.history.push({
            date: currentDate,
            price: product.price
        });
        
        // Update current price
        product.price = newPrice;
        product.inStock = isInStock;
        
        // Keep only last 30 days of history
        if (product.history.length > 30) {
            product.history.shift();
        }
        
        // Save to localStorage
        saveToLocalStorage();
        
        // Update display
        updatePriceDisplay(productId);
    }
}

// Function to get lowest price
function getLowestPrice(productId) {
    const retailers = productPrices[productId];
    let lowestPrice = Infinity;
    let bestRetailer = '';
    
    Object.entries(retailers).forEach(([retailer, info]) => {
        if (info.price < lowestPrice && info.inStock) {
            lowestPrice = info.price;
            bestRetailer = retailer;
        }
    });
    
    return { retailer: bestRetailer, price: lowestPrice };
}

// Function to show retailer options with enhanced features
function showRetailerOptions(productId) {
    const retailers = productPrices[productId];
    if (!retailers) return;

    const optionsContainer = document.getElementById(`${productId}-retailers`);
    if (!optionsContainer) return;

    // Clear existing content
    optionsContainer.innerHTML = '';

    // Add price history button
    const historyButton = document.createElement('button');
    historyButton.className = 'history-btn';
    historyButton.innerHTML = 'View Price History';
    historyButton.onclick = () => showPriceHistory(productId);
    optionsContainer.appendChild(historyButton);

    // Get lowest price
    const lowestPrice = getLowestPrice(productId);

    // Create retailer links
    Object.entries(retailers).forEach(([retailer, info]) => {
        const retailerDiv = document.createElement('a');
        retailerDiv.href = info.link;
        retailerDiv.target = '_blank';
        retailerDiv.className = 'retailer-link';
        
        const isLowestPrice = retailer === lowestPrice.retailer;
        
        retailerDiv.innerHTML = `
            <span class="retailer-name">${capitalizeFirstLetter(retailer)}</span>
            <div>
                <span class="price ${isLowestPrice ? 'lowest-price' : ''}">${formatPrice(info.price)}</span>
                <span class="stock-status ${info.inStock ? 'in-stock' : 'out-stock'}">
                    ${info.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                ${isLowestPrice ? '<span class="best-price-badge">Best Price</span>' : ''}
            </div>
        `;

        optionsContainer.appendChild(retailerDiv);
    });

    // Show the container
    optionsContainer.style.display = 'block';
}

// Function to display price history
function showPriceHistory(productId) {
    const historyModal = document.createElement('div');
    historyModal.className = 'price-history-modal';
    
    let historyHTML = '<h3>Price History (Last 30 Days)</h3><div class="history-chart">';
    
    Object.entries(productPrices[productId]).forEach(([retailer, info]) => {
        historyHTML += `<h4>${capitalizeFirstLetter(retailer)}</h4>`;
        if (info.history.length > 0) {
            historyHTML += createPriceChart(info.history);
        } else {
            historyHTML += '<p>No price history available</p>';
        }
    });
    
    historyHTML += '</div>';
    historyModal.innerHTML = historyHTML;
    
    document.body.appendChild(historyModal);
}

// Helper function to format price
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Save price data to localStorage
function saveToLocalStorage() {
    localStorage.setItem('priceData', JSON.stringify(productPrices));
}

// Load price data from localStorage
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('priceData');
    if (savedData) {
        Object.assign(productPrices, JSON.parse(savedData));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    // Check for price updates periodically (every 6 hours)
    setInterval(checkPriceUpdates, 6 * 60 * 60 * 1000);
});

// Add necessary styles
const styles = `
    .lowest-price {
        color: #2ecc71;
        font-weight: bold;
    }
    .best-price-badge {
        background: #2ecc71;
        color: white;
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 12px;
        margin-left: 8px;
    }
    .price-history-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 1000;
    }
    .history-btn {
        margin-bottom: 10px;
        padding: 8px 16px;
        background: #f0f0f0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .history-chart {
        margin-top: 15px;
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Export functions
window.showRetailerOptions = showRetailerOptions;
window.hideRetailerOptions = hideRetailerOptions;
window.updatePrice = updatePrice;
