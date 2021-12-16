
// CONTAINER SLIDER

let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img"),
    max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)

// ALERT PAGE UNDER CONSTRUCTION

document.getElementById("on_click").onclick = function () {
    window.setTimeout(function (){
        alert("Page under construction");
    },2000);
}
