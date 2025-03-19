document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const modal = document.getElementById('myModal');
    const modalVideo = document.getElementById('youtubeVideo');
    const closeBtn = document.querySelector('.close');
    const bookTableButton = document.querySelector('.book-table-button');
    const dateInput = document.getElementById('dateInput');
    const slider = document.querySelector('.category-list');
    const prevButton = document.querySelector('.slider-arrow.prev');
    const nextButton = document.querySelector('.slider-arrow.next');
    const categoryItems = document.querySelectorAll('.category-item');
    let currentStartIndex = 0;

    // Replace with your actual YouTube video ID
    const youtubeVideoId = 'dQw4w9WgXcQ'; // Example video

    playButton.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
        modalVideo.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        modalVideo.src = ''; // Stop video when closing modal
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalVideo.src = ''; // Stop video when clicking outside
        }
    });

    // Book Table Button Hover Effect
    bookTableButton.addEventListener('mouseover', function() {
        bookTableButton.style.backgroundColor = '#805a36';
    });

    bookTableButton.addEventListener('mouseout', function() {
        bookTableButton.style.backgroundColor = '#a07346';
    });

    // Date Picker
    dateInput.addEventListener('focus', function() {
        // You would typically use a datepicker library here
        // For simplicity, let's just show a placeholder
        alert('You would typically use a datepicker library here.');
    });

    // Slider Functionality
    nextButton.addEventListener('click', function() {
        const numItems = categoryItems.length;
        if (currentStartIndex < numItems - 4) {
            currentStartIndex++;
            updateSlider();
        }
    });

    prevButton.addEventListener('click', function() {
        if (currentStartIndex > 0) {
            currentStartIndex--;
            updateSlider();
        }
    });

    function updateSlider() {
        categoryItems.forEach((item, index) => {
            if (index >= currentStartIndex && index < currentStartIndex + 4) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    updateSlider();
});


const orderButton = document.querySelector('.order-button');

orderButton.addEventListener('click', function() {
    orderButton.style.backgroundColor = '#333'; // Dark brown
});

const menuItems = {
    'main-dishes': [
        {
            name: 'Braised Chicken Legs',
            image: './images/1.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.9(5.7k)',
            price: '$34',
            oldPrice: '$35'
            
        },
        {
            name: 'Bone Steak',
            image: './images/2.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.2(3.1k)',
            price: '$18',
            oldPrice: '$25'
        },
        {
            name: 'Fish Tacos with Chipotle Crema',
            image: './images/3.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.8(6.7k)',
            price: '$12',
            oldPrice: '$18'
        },
        {
            name: 'Broken Lasagna & Parmesan',
            image: './images/4.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '3(3.5k)',
            price: '$22',
            oldPrice: '$38'
        },
        {
            name: 'Seared Scallops With Butter',
            image: './images/5.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.6(5.7k)',
            price: '$34',
            oldPrice: '$36'
        },
        {
            name: 'Double-Stack Mushroom',
            image: './images/6.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.8(5.5k)',
            price: '$36',
            oldPrice: '$40'
        }
    ],
    'desserts': [
        {
            name: 'Vanilla Cupcakes',
            image: './images/7.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.9(5.7k)',
            price: '$34',
            oldPrice: '$35'
        },
        {
            name: 'Chocolate Brownie',
            image: './images/8.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.2(3.1k)',
            price: '$18',
            oldPrice: '$25'
        },
        {
            name: 'Croissants Sweet Rolls Muffin',
            image: './images/9.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.8(6.7k)',
            price: '$12',
            oldPrice: '$18'
        },
        {
            name: 'White Chocolate Cheesecake',
            image: './images/10.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '5(3.5k)',
            price: '$22',
            oldPrice: '$38'
        },
        {
            name: 'Lemon Meringue Pie',
            image: 'images/11.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.6(5.7k)',
            price: '$34',
            oldPrice: '$36'
        },
        {
            name: 'Mixed Berry Mousse',
            image: 'images/12.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.8(5.5k)',
            price: '$36',
            oldPrice: '$40'
        }
    ],
    'sea-food': [
        {
            name: 'Salmon Fry',
            image: './images/13.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.9(5.7k)',
            price: '$34',
            oldPrice: '$35'
        },
        {
            name: 'Pangasius or Basa',
            image: './images/14.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.2(3.1k)',
            price: '$18',
            oldPrice: '$25'
        },
        {
            name: 'Spicy Stuffed Clams',
            image: './images/15.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.8(6.7k)',
            price: '$12',
            oldPrice: '$18'
        },
        {
            name: 'Special Cajun Red Crab',
            image: './images/16.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '5(3.5k)',
            price: '$22',
            oldPrice: '$38'
        },
        {
            name: 'Crustaceans such as lobsters',
            image: './images/17.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.6(5.7k)',
            price: '$34',
            oldPrice: '$36'
        },
        {
            name: 'The cephalopod mollusks',
            image: './images/18.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.8(5.5k)',
            price: '$36',
            oldPrice: '$40'
        }
    ],
    'beverage': [
        {
            name: 'Cabernet Sauvignon',
            image: './images/19.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.9(5.7k)',
            price: '$34',
            oldPrice: '$35'
        },
        {
            name: 'Americano Coffee',
            image: './images/20.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.2(3.1k)',
            price: '$18',
            oldPrice: '$25'
        },
        {
            name: 'Hot chocolate Shake',
            image: './images/21.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.8(6.7k)',
            price: '$12',
            oldPrice: '$18'
        },
        {
            name: 'Watermelon Juice',
            image: './images/22.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '5(3.5k)',
            price: '$22',
            oldPrice: '$38'
        },
        {
            name: 'Seared Scallops with Butter',
            image: './images/23.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.6(5.7k)',
            price: '$34',
            oldPrice: '$36'
        },
        {
            name: 'Soft Drinks',
            image: './images/24.jpg',
            description: '4 Chicken Legs • Chilli Sauce • Soft Drinks',
            rating: '4.8(5.5k)',
            price: '$36',
            oldPrice: '$40'
        }
    ]
};

const tabButtons = document.querySelectorAll('.tab-button');
const menuItemsContainer = document.querySelector('.menu-items');

function displayMenuItems(category) {
    menuItemsContainer.innerHTML = ''; // Clear existing items
    menuItems[category].forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <div class="rating">${item.rating}</div>
                <div class="price-container">
                    <span class="price">${item.price}</span>
                    <span class="old-price">${item.oldPrice}</span>
                </div>
            </div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a href="#" class="add-to-cart">Add to Cart</a>
        `;
        menuItemsContainer.appendChild(menuItemDiv);
    });
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active')); // Deactivate all buttons
        button.classList.add('active'); // Activate the clicked button
        const category = button.dataset.category;
        displayMenuItems(category);
    });
});

// Display default menu items (e.g., main dishes) on page load
displayMenuItems('main-dishes');