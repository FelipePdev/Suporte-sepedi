const menuElement = document.querySelector("#menu");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".menu-link");

function toggleMenuOpen() {
  const isOpen = menu.classList.contains("hidden");

  if (isOpen) {
    body.classList.add("overflow-hidden");
    menuElement.classList.remove("hidden");
    return;
  }
  body.classList.add("overflow-scroll");
  menuElement.classList.add("hidden");
}
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenuOpen();
  });
});
