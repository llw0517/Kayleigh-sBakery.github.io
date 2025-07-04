const priceBaked = "$4.50";
const priceDough = "$3.50";

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
            sessionStorage.setItem("OatmealRaisin-baked", unit);
            alert(`Added ${unit} Baked Oatmeal Raisin Cookies to cart`);
        } else {
            sessionStorage.setItem("OatmealRaisin-dough", unit);
            alert(`Added ${unit} Oatmeal Raisin Cookies Dough to cart`);
        }
        window.location.href = "../product.html";
    });
};
