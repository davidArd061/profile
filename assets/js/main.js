// menu navigasi dihp
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });
}

// tanda menu navbar yang dibuka
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("#nav-menu a").forEach((link) => {
  const linkPage = link.getAttribute("href").split("#")[0];
  if (linkPage === currentPage) {
    link.classList.add("text-amber-300", "font-bold");
    link.classList.remove("text-violet-100");
  }
});

