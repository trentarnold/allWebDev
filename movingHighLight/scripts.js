const trigger = document.querySelectorAll('a');
const highLight = document.createElement('span');
highLight.classList.add('highlight');
document.body.append(highLight);

function highlightLink(e){
  const linkCoordinates = this.getBoundingClientRect();
  const coords = {
    width: linkCoordinates.width,
    height: linkCoordinates.height,
    top: linkCoordinates.top + window.scrollY,
    left: linkCoordinates.left + window.scrollX
  }
  highLight.style.width = `${coords.width}px`;
  highLight.style.height = `${coords.height}px`;
  highLight.style.transform=`translate(${coords.left}px, ${coords.top}px)`

}
trigger.forEach(a => a.addEventListener('mouseenter', highlightLink));
