var sidenavbar = document.querySelector(".side-navbar");

function shownavbar() {
    sidenavbar.style.display="block";
    sidenavbar.style.left = "0";
}
function closenavbar() {
    sidenavbar.style.left = "-40%";
}

var newstylescontainer = document.querySelectorAll(".new-styles-container img");

newstylescontainer.forEach(function (img) {

    img.addEventListener("mouseenter", function () {
        img.style.transform = "scale(1.08) translateY(-5px)";
        img.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
        img.style.transition = "all 0.3s ease";
    });

    img.addEventListener("mouseleave", function () {
        img.style.transform = "scale(1) translateY(0)";
        img.style.boxShadow = "none";
    });
});

