"use strict";

// Get the middle-container and chess elements
const mContainer = document.querySelector(".middle-container");
const container = document.querySelector(".right-container");
const tcontainer = document.querySelector(".left-container");
// Set the initial opacity and position
mContainer.style.opacity = 0;
mContainer.style.transform = "translateY(50px)";
container.style.opacity = 0;
container.style.transform = "translateY(50px)";
tcontainer.style.opacity = 0;
tcontainer.style.transform = "translateY(50px)";

// Animate the elements when the page loads
window.onload = () => {
  mContainer.style.opacity = 1;
  mContainer.style.transform = "translateY(0)";
  mContainer.style.transition = "opacity 1s, transform 1s";

  container.style.opacity = 1;
  container.style.transform = "translateY(0)";
  container.style.transition = "opacity 1s, transform 1s";

  tcontainer.style.opacity = 1;
  tcontainer.style.transform = "translateY(0)";
  tcontainer.style.transition = "opacity 1s, transform 1s";
};
