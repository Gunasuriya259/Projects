var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})

var productImages = document.querySelectorAll(".products-box img");

productImages.forEach(function(img) {

    img.addEventListener("mouseenter", function() {
        img.style.transform = "scale(1.08) translateY(-5px)";
        img.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
        img.style.transition = "all 0.3s ease";
    });

    img.addEventListener("mouseleave", function() {
        img.style.transform = "scale(1) translateY(0)";
        img.style.boxShadow = "none";
    });
});