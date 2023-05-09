const slider = document.querySelector('.items');
let isClicked = false;
let startx;
let scrollLeft;

function moveSlider(e){
  if(!isClicked) return
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
const walk = (x - startx) *3;
console.log(walk);
slider.scrollLeft = scrollLeft - walk;

}

slider.addEventListener('mousedown', (e)=> {
  isClicked = true;
  slider.classList.add('active');
  startx = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseup', ()=> {
  isClicked = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', moveSlider);
slider.addEventListener('mouseleave', ()=> {
  isClicked = false;
  slider.classList.remove('active');
});
