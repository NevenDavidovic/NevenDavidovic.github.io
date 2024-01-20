"use strict";

// Get the container element
const container = document.querySelector(".container");

// Set the initial opacity and position
container.style.opacity = 0;
container.style.transform = "translateY(50px)";

// Animate the element when the page loads
window.onload = () => {
  container.style.opacity = 1;
  container.style.transform = "translateY(0)";
  container.style.transition = "opacity 1s, transform 1s";
};

// modal window #1

const modal = document.querySelector(".modal1");

const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const evolveOpenModal = document.querySelector(".info1");

evolveOpenModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// modal window #2
const modalMartinHorvat = document.querySelector(".modal2");
const bolnicaHorvatBtn = document.querySelector(".info2");
const btnCloseModal2 = document.querySelector(".close-modal2");

bolnicaHorvatBtn.addEventListener("click", function () {
  modalMartinHorvat.classList.remove("hiddenn");
  overlay.classList.remove("hidden");
});

btnCloseModal2.addEventListener("click", function () {
  modalMartinHorvat.classList.add("hiddenn");
  overlay.classList.add("hidden");
});

// modal window #3

const modalDZVelaLuka = document.querySelector(".modal3");
const btnVelaLuka = document.querySelector(".info3");
const btnCloseVelaLuka = document.querySelector(".close-modal3");

btnVelaLuka.addEventListener("click", function () {
  modalDZVelaLuka.classList.remove("hiddennn");
  overlay.classList.remove("hidden");
});

btnCloseVelaLuka.addEventListener("click", function () {
  modalDZVelaLuka.classList.add("hiddennn");
  overlay.classList.add("hidden");
});

// modal window #4
const modalDZKorcula = document.querySelector(".modal4");
const btnKorcula = document.querySelector(".info4");
const btnCloseKorcula = document.querySelector(".close-modal4");

btnKorcula.addEventListener("click", function () {
  modalDZKorcula.classList.remove("hiddennnn");
  overlay.classList.remove("hidden");
});

btnCloseKorcula.addEventListener("click", function () {
  modalDZKorcula.classList.add("hiddennnn");
  overlay.classList.add("hidden");
});

//modal window #5
const modalNasice = document.querySelector(".modal5");
const btnNasice = document.querySelector(".info5");
const btnCloseNasice = document.querySelector(".close-modal5");

btnNasice.addEventListener("click", function () {
  modalNasice.classList.remove("hiddennnnn");
  overlay.classList.remove("hidden");
});

btnCloseNasice.addEventListener("click", function () {
  modalNasice.classList.add("hiddennnnn");
  overlay.classList.add("hidden");
});
