window.addEventListener("scroll", function () {
    var whatsappButton = document.querySelector(".whatsapp-button");
    var distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;

    if (distanceFromTop > 100) {
        whatsappButton.style.display = "block";
    } else {
        whatsappButton.style.display = "none";
    }
});