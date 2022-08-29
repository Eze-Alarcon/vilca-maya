let buttonMenu = document.getElementById("button-menu");

let backgroundBlur = document.getElementById("page-mask");

let burguerMenu = document.getElementById("burguer-menu");

let menuOpen = false;

let click = 0;

function toggleVisibility(element) {
  element.style.visibility = "visible";
  menuOpen = true;
}

function toggleOpacity(element) {
  element.style.opacity = "1";
  menuOpen = true;
}

buttonMenu.addEventListener("click", function openMenu() {
  toggleVisibility(backgroundBlur);
  toggleVisibility(burguerMenu);
  toggleOpacity(backgroundBlur);
  toggleOpacity(burguerMenu);
  closeMenu();
});

let eventHander = function (event) {
  const withinBoundaries = event.composedPath().includes(burguerMenu);
  if (!withinBoundaries) {
    click++;
    if (click > 1) {
      backgroundBlur.style.visibility = "hidden";
      burguerMenu.style.visibility = "hidden";
      backgroundBlur.style.opacity = "0";
      burguerMenu.style.opacity = "0";
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
