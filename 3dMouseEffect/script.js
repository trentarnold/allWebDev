const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow (e){
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  if(this !== e.target){
    x= x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = (x / width * walk) - (walk/2);
  const yWalk = (y / height * walk) - (walk/2);
  console.log(xWalk, yWalk)
  text.style.textShadow = `
${xWalk}px ${yWalk}px  purple,
${xWalk  * -1}px ${yWalk}px red,
${yWalk}px ${xWalk}px purple,
${yWalk * -1}px ${xWalk}px red
  `;
}

hero.addEventListener('mousemove', shadow)
