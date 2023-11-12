// Menambahkan event listener ke elemen dokumen
document.addEventListener("click", function (event) {
  const hamburger = document.getElementsByClassName("hamburger")[0];
  const menuNavbar = document.getElementsByClassName("menu-navbar")[0];

  // Memeriksa apakah elemen yang diklik bukan bagian dari menu hamburger atau menu navbar
  if (!event.target.closest(".hamburger") && !event.target.closest(".menu-navbar")) {
    // Menyembunyikan menu hamburger jika sedang terbuka
    if (hamburger.classList.contains("open")) {
      hamburger.classList.remove("open");
      menuNavbar.classList.remove("open");
    }
  }
});

// Menambahkan event listener ke tombol toggler-navbar
document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toggleClass);

// Fungsi untuk menangani toggle hamburger menu
function toggleClass() {
  const hamburger = document.getElementsByClassName("hamburger")[0];
  const menuNavbar = document.getElementsByClassName("menu-navbar")[0];

  hamburger.classList.toggle("open");
  menuNavbar.classList.toggle("open");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

