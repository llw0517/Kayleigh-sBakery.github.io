const priceBaked = "$3.50";
const priceDough = "$2.50";

var unit = 1;
var baked = true;

window.onload = function () {
    document.getElementById("amount").innerText = unit;
    document.getElementById("price").innerText = priceBaked;

    document.getElementById("plus").addEventListener("click", function () {
        unit++;
        document.getElementById("amount").innerText = unit;
    });
  
    document.getElementById("minus").addEventListener("click", function () {
        if (unit > 1) {
        unit--;
        document.getElementById("amount").innerText = unit;
        }
    });

    document.getElementById("baked-yes").addEventListener("click", function () {
        baked = true;
        document.getElementById("price").innerText = priceBaked;
    });

    document.getElementById("baked-no").addEventListener("click", function () {
        baked = false;
        document.getElementById("price").innerText = priceDough
    });

    document.getElementById("add-to-cart").addEventListener("click", function () {
        if (baked) {
            sessionStorage.setItem("ChocolateChip-baked", unit);
            alert(`Added ${unit} Baked Chocolate Chip Cookies to cart`);
        } else {
            sessionStorage.setItem("ChocolateChip-dough", unit);
            alert(`Added ${unit} Chocolate Chip Cookies Dough to cart`);
        }
        window.location.href = "../product.html";
    });
};
