const menuElement = document.querySelector("#menu");
const body = document.querySelector("body");

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
