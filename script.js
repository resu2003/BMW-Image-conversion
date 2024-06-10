// Select the required elements
const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-before");

const dragSlider = (event) => {
  // Determine the position of the slider
  let x;
  if (event.type == "mousemove") {
    x = event.clientX - container.getBoundingClientRect().left;
  } else {
    x = event.touches[0].clientX - container.getBoundingClientRect().left;
  }

  // Constrain the position of the slider within the container
  x = Math.max(0, Math.min(x, container.offsetWidth));

  // Adjust the width of the before image and position of the slider
  before.style.width = x + "px";
  slider.style.left = x + "px";
};

// Attach event listeners for mouse and touch events
container.addEventListener("mousemove", dragSlider);
container.addEventListener("touchmove", dragSlider);

// Prevent default touch behavior
container.addEventListener("touchstart", (event) => event.preventDefault());
