const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
cities=[];
fetch(endpoint).then(blob=>blob.json()).then(data=>cities.push(...data));

function findMatch(typedWord, cities){
  return cities.filter(city=>{
    const regex = RegExp(typedWord, 'gi')
    return city.city.match(regex) || city.state.match(regex)
  })
}
function displayMatch(){
  const matchArray = findMatch(this.value, cities);
  const html = matchArray.map(place=>{
    const regex = new RegExp(this.value, 'gi');
    const cityMatch = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
    const stateMatch = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);

    return `
    <li>
    <span class='name'>${cityMatch}</span>
    <span class='suggestions'>${stateMatch}</span>
    <span class='population'>${place.population}</span>
    </li>
    `
  });
  suggestions.innerHTML=html
}
const searchInput= document.querySelector('.search');
const suggestions= document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatch);
searchInput.addEventListener('keyup', displayMatch);
