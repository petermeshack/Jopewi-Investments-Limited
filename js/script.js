// ------------ Responsive menu ------------
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
menuBtn.addEventListener('click',()=> mobileMenu.classList.toggle('show'));

// ------------ Carousel ------------
const slidesContainer = document.querySelector('.slides');

// Supply your image URLs here (can be from your own folder or online)
const images = [
  "https://picsum.photos/1000/400?random=1",
  "https://picsum.photos/1000/400?random=2",
  "https://picsum.photos/1000/400?random=3",
  "https://picsum.photos/1000/400?random=4"
];

// Create <img> elements dynamically
images.forEach(url=>{
  const img = document.createElement('img');
  img.src = url;
  img.alt = "Carousel image";
  slidesContainer.appendChild(img);
});

let index = 0;

function showSlide(i){
    if(i<0) index = images.length-1;
    else if(i>=images.length) index = 0;
    else index = i;
    slidesContainer.style.transform = `translateX(-${index*100}%)`;
}

// Manual controls
document.querySelector('.left').addEventListener('click',()=>showSlide(index-1));
document.querySelector('.right').addEventListener('click',()=>showSlide(index+1));

// Automatic slide every 4 seconds
setInterval(()=> showSlide(index+1), 4000);
