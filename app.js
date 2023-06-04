const loadtext = document.querySelector(".loading-text");
const bg = document.querySelector('.bg');

let load = 0;
let inter = setInterval(blurIt, 30);

function blurIt(){
 load++;
 if(load==100){
  clearInterval(inter);
 }
 console.log(load);
 loadtext.innerText = `${load}%`;
 loadtext.style.opacity = scale(load, 0, 100, 1,0);
 bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

//Link to the function
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers 