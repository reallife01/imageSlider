// Access the images 
const slideImages = document.querySelectorAll('img');
// Acess the next and prev buttons 
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
// Acces the indicatos 
let dots = document.querySelectorAll('.dot');

let counter = 0;


// Code for the next button 

next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= slideImages.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators()
}

// Code for prev button

prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter == 0) {
        counter = slideImages.length - 1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators()
}


// Auto Sliding 

const autoSliding = () => {
    deletInterval = setInterval(timer, 5000);
    function timer() {
        slideNext()
        indicators()
    }
}
autoSliding()


// Stop auto sliding when mouse is over 
const slideContainer = document.querySelector('.slideContainer')
slideContainer.addEventListener('mouseover', () => {
    clearInterval(deletInterval);
})


// Remove sliding when mouse is out 
slideContainer.addEventListener('mouseout', autoSliding)

//Add and remove active class from the indicators 
const indicators = () => {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    dots[counter].className += ' active';
}

// Add click

const switchImage = (currentImage) => {
    currentImage.classList.add('active');
    const imageId = currentImage.getAttribute('attr')
    if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if (imageId == counter) {
        return;
    }

    else {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}












