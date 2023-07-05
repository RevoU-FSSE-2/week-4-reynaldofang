/** Membuat Menu hamburger biar bisa dipakai */
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav_open");
  hamburgerEl.classList.toggle("hamburger_open");
});

navEl.addEventListener("click", () => {
  navEl.classList.remove("nav_open");
  hamburgerEl.classList.remove("hamburger_open");
});

/* Nav Active */

// Ambil semua elemen navbar yang memiliki kelas "nav_link"
const navLinks = document.querySelectorAll(".nav_link");

// Tambahkan event listener pada setiap elemen navbar
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Hapus kelas "active" dari semua elemen navbar
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    // Tambahkan kelas "active" pada elemen navbar yang sedang aktif
    link.classList.add("active");
  });
});

/** Untuk Dark Mode Script */

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
