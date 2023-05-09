const navBar = document.querySelector('#main');
const topOfNav  = navBar.offsetTop;
function toFixedNav(){
  if(window.scrollY >= topOfNav){
    document.body.style.paddingTop = navBar.offsetHeight + 'px';
    document.body.classList.add('to-fixed');
  }else{
    document.body.style.paddingTop = 0;
    document.body.classList.remove('to-fixed');
  }
}
document.addEventListener('scroll', toFixedNav);
