// product.js

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(item => item.name === product.name && item.option === product.option);

    if (index > -1) {
        cart[index].quantity += product.quantity;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) {
        console.error("Missing #cart-items or #cart-total in HTML.");
        return;
    }

    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <img src="logo.png" alt="${item.name}">
            <div class="item-info">
                <p><strong>${item.name}</strong> (${item.option})</p>
                <p>
                    Quantity:
                    <button class="qty-btn" data-index="${index}" data-action="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" data-index="${index}" data-action="increase">+</button>
                </p>
                <p>Unit Price: $${item.price.toFixed(2)}</p>
                <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;
        cartItems.appendChild(div);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    // Quantity adjustment logic
    document.querySelectorAll(".qty-btn").forEach(button => {
        button.addEventListener("click", function () {
            const index = parseInt(this.dataset.index);
            const action = this.dataset.action;

            if (cart[index]) {
                if (action === "increase") {
                    cart[index].quantity += 1;
                } else if (action === "decrease" && cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            }
        });
    });

    // Remove item logic
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function () {
            const index = parseInt(this.dataset.index);
            cart.splice(index, 1); // remove from array
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        });
    });
}


function clearCart() {
    localStorage.removeItem("cart");
    renderCart();
  }