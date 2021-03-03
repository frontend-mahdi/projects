function showMenu() {
  let menu = document.getElementById("menu");
  let menu_btn = document.getElementById("menu-btn");
  if (menu.className === "header-menu") {
    menu.className += " show-menu";
    menu_btn.className = "fa fa-times";
  } else {
    menu.className = "header-menu";
    menu_btn.className = "fa fa-bars";
  }
}
