
const priceBaked = 4.50;
const priceDough = 3.50;

let unit = 1;
let baked = true;

window.onload = function () {
    const priceElement = document.getElementById("price");
    const amountElement = document.getElementById("amount");

    amountElement.innerText = unit;
    priceElement.innerText = `$${priceBaked.toFixed(2)}`;

    document.getElementById("plus").addEventListener("click", function () {
        unit++;
        amountElement.innerText = unit;
    });

    document.getElementById("minus").addEventListener("click", function () {
        if (unit > 1) {
            unit--;
            amountElement.innerText = unit;
        }
    });

    document.getElementById("baked-yes").addEventListener("click", function () {
        baked = true;
        priceElement.innerText = `$${priceBaked.toFixed(2)}`;
    });

    document.getElementById("baked-no").addEventListener("click", function () {
        baked = false;
        priceElement.innerText = `$${priceDough.toFixed(2)}`;
    });

    document.getElementById("add-to-cart").addEventListener("click", function () {
        const product = {
            name: "Oatmeal Raisin Cookie",
            price: baked ? priceBaked : priceDough,
            quantity: unit,
            option: baked ? "Baked" : "Dough"
        };

        addToCart(product);  // uses the function from product.js

        alert(`Added ${unit} ${product.option} Oatmeal Raisins Cookie(s) to cart.`);
        window.location.href = "../product.html";
    });
};
