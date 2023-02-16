const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-items"))
.forEach((item, index) => {
  item.onmouseover = () => {
    menu.dataset.activeIndex = index;
  }
});
S