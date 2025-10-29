document.addEventListener("DOMContentLoaded", function() {


    let imgs = document.querySelectorAll ("[id^=portfolio-pic-]")

    imgs.forEach(img => {
        img.onclick = function() {
            let original = img.getAttribute("src");
            window.open (original, "_blank");
        };
    });

});