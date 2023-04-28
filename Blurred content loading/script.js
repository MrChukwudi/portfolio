let loadText = document.querySelector(".loading-text");
let bg = document.querySelector(".bg");

let load = 0;

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(loadInterval); //This will stop our load value from increasing after it had reached 100%
  }
  //To control the textual display of percentage loading on the screen
  loadText.innerHTML = `${load}%`;

  loadText.style.opacity = scale(load, 0, 100, 1, 0); //Controlling opacity of the load indicator text s it reads.
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; //Controlling opacity of the load indicator text s it reads.
}

let loadInterval = setInterval(blurring, 30); // This makes sure that our blur effect loads increamentally after every 30 miliseconds until fully loaded.

/*Now, we need to somehow map opacity range (0 - 1) to the range of load (0 - 100), to do this, I copied this scale mapping solution from stackoverflow:
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

  function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
Basically this function enables us to map the opacity of tany element over 100 units of the loading indicator text
number = load;
inMin = 0; //at load value of 100
inMax = 100; //at load value of 100
outMin = 0; //for the 0 opacity
outMax = 1; // for opacity value of 1

  */
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
