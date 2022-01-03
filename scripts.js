
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

function click_alert() {
    window.setTimeout(function (){
        Swal.fire({icon: 'error', text: 'Page under construction'})
    },2000);
}

// Submite Successful 

function validation() {
    Swal.fire('Saved!', 'Your email was saved!','success')
}