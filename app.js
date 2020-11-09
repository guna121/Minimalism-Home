
const Kotak = document.querySelector(".Kotak");
const container = document.querySelector(".container");

const nama = document.querySelector(".nama");
const foto = document.querySelector(".foto img");
const Instagram = document.querySelector(".Instagram");
const description = document.querySelector(".info h3");
const tombol = document.querySelector(".tombol");



container.addEventListener("mouseenter", (e) => {
  Kotak.style.transition = "none";

  nama.style.transform = "translateZ(150px)";
  foto.style.transform = "translateZ(100px) ";
  description.style.transform = "translateZ(125px)";
  tombol.style.transform = "translateZ(100px)";
  Instagram.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
  Kotak.style.transition = "all 0.5s ease";
  Kotak.style.transform = `rotateY(0deg) rotateX(0deg)`;

  nama.style.transform = "translateZ(0px)";
  foto.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  tombol.style.transform = "translateZ(0px)";
  Instagram.style.transform = "translateZ(0px)";
});

function showAlert() {
  alert ("https://www.youtube.com/watch?v=4XmhtbcMWEY https://www.geeksforgeeks.org/how-to-create-floating-box-effect-using-html-and-css/ https://medium.com/kingrayhan/material-design-box-shadow-147c1d3b6f14 ");
}