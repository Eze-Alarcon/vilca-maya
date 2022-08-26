let buttonMenu = document.getElementById("button-menu");

let backgroundBlur = document.getElementById("page-mask");

let burguerMenu = document.getElementById("burguer-menu");

let menuOpen = false;

let click = 0;

function toggle(element) {
  let display = element.style.display;
  element.style.display = "flex";
  menuOpen = true;
}

buttonMenu.addEventListener("click", function openMenu() {
  toggle(backgroundBlur);
  toggle(burguerMenu);
  closeMenu();
});

let eventHander = function (event) {
  const withinBoundaries = event.composedPath().includes(burguerMenu);
  if (!withinBoundaries) {
    click++;
    if (click > 1) {
      backgroundBlur.style.display = "none";
      burguerMenu.style.display = "none";
      click = 0;
    }
  }
};

function closeMenu() {
  if ((menuOpen = true)) {
    document.addEventListener("click", eventHander);
  } else if ((menuOpen = false)) {
    document.removeEventListener("click", eventHander);
    click = 0;
  }
  click = 0;
}
