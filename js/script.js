
let cart = [];

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

document.querySelectorAll('.buttons-contain.r').forEach(buttonContainer => {
    buttonContainer.querySelector('.btn').addEventListener('click', () => {
        const parentBox = buttonContainer.closest('.box');
        const name = parentBox.querySelector('h3').textContent; // Get the name from the box content
        const price = parseFloat(parentBox.querySelector('.content span').textContent.split('₱')[1]); // Get the price from the box content
        const quantity = parseInt(parentBox.querySelector('.quantity-input').value); // Get the quantity from the input field

        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ name, price, quantity });
        }

        updateSelectedItems();

        // Show an alert message
        alert(`${name} has been added to your cart!`);
    });
});


function updateSelectedItems() {
    const selectedItemsContainer = document.getElementById('selected-items');
    selectedItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `${item.name} x${item.quantity} - ₱${item.price * item.quantity}`;
        selectedItemsContainer.appendChild(itemElement);
    });
}

document.querySelector('.checkout-btn').addEventListener('click', () => {
    // Handle checkout logic here, e.g., displaying receipt
    const receiptContainer = document.getElementById('receipt');
    receiptContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        receiptContainer.innerHTML += `${item.name} x${item.quantity} - ₱${itemTotal}<br>`;
        total += itemTotal;
    });
    receiptContainer.innerHTML += `<strong>Total: ₱${total}</strong>`;
});

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', event => {
        event.preventDefault(); // Prevent the default behavior
        const button = box.querySelector('.add-to-cart-btn');
        button.click(); // Simulate a click on the "Add to Cart" button
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        var btns = document.querySelectorAll(".add-to-cart-btn");
      
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
      
        // When the user clicks on the button, open the modal
        btns.forEach(function(btn) {
          btn.onclick = function() {
            modal.style.display = "block";
          }
        });
      
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
      
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
      
        function showPaymentModal() {
            var modal = document.getElementById("payment-modal");
            modal.style.display = "block";
        }
        
        // Close the payment modal when the user clicks on the close button
        var closePaymentModal = document.getElementsByClassName("close")[1];
        closePaymentModal.onclick = function() {
            var modal = document.getElementById("payment-modal");
            modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the payment modal, close it
        window.onclick = function(event) {
            var modal = document.getElementById("payment-modal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
        function toggleCardDetails() {
            var paymentMethod = document.getElementById("payment-method").value;
            var cardDetails = document.getElementById("card-details");
            if (paymentMethod === "card") {
                cardDetails.style.display = "block";
            } else {
                cardDetails.style.display = "none";
            }
        }
        var cartItems = [];

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    var item = {
        name: itemName,
        price: itemPrice
    };
    cartItems.push(item);
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    var cartItemsPlaceholder = document.getElementById('cart-items-placeholder');
    cartItemsPlaceholder.innerHTML = ''; // Clear previous content

    if (cartItems.length === 0) {
        cartItemsPlaceholder.innerHTML = 'No items added to cart';
    } else {
        // Create list of items
        var itemList = document.createElement('ul');
        cartItems.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.textContent = item.name + ' - ₱' + item.price;
            itemList.appendChild(listItem);
        });
        cartItemsPlaceholder.appendChild(itemList);
    }
}

// Function to handle checkout button click
function showPaymentModal() {
    // Display the payment modal
    document.getElementById('payment-modal').style.display = 'block';

    // Set placeholders for card details fields
    document.getElementById('card-number').placeholder = 'Card Number';
    document.getElementById('expiry-date').placeholder = 'MM/YY';
    document.getElementById('cvv').placeholder = 'CVV';

    // Update cart display
    updateCartDisplay();
}
    function showCheckout() {
        var checkoutSection = document.getElementById("checkout");
        checkoutSection.style.display = "block";
        
        // Optionally, you can also show the order summary here
        var orderSummary = document.getElementById("order-summary");
        orderSummary.style.display = "block";
    }
    function placeOrder() {
        // Code to process the order goes here
    
        // Display the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    
        // Close the modal when the close button is clicked
        var closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    
        // Close the modal when the user clicks anywhere outside the modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    function openPlaceOrderModal() {
        var placeOrderModal = document.getElementById("placeOrderModal");
        placeOrderModal.style.display = "block";
    }
    
    function confirmOrder() {
        // Code to process the order goes here
    
        // Display the confirmation message
        var modal = document.getElementById("myModal1");
        modal.style.display = "block";
    
        // Close the confirmation modal after 2 seconds
        setTimeout(function() {
            modal.style.display = "none";
        }, 2000);
    
        // Close the place order modal
        var placeOrderModal = document.getElementById("placeOrderModal");
        placeOrderModal.style.display = "none";
    }
    