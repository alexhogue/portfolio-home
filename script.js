// const star = document.getElementById("cloud");
let newX = 0, newY = 0, startX = 100, startY = 100;
let offsetX = 0,
  offsetY = 0;
let isDragging = false;

star.addEventListener('mousedown', mouseDown)

function mouseDown(e){
  isDragging = true;
  e.preventDefault();
  startX = e.clientX
  startY = e.clientY


  document.addEventListener('mousemove', mouseMove)
  document.addEventListener("mouseup", mouseUp);

  offsetX = star.getBoundingClientRect().left - startX;
  offsetY = star.getBoundingClientRect().top - startY;
}

function mouseMove(e){
  newX = startX - e.clientX
  newY = startY - e.clientY 

  const newPosX = e.clientX + offsetX;
  const newPosY = e.clientY + offsetY;

  star.style.left = newPosX + "px";
  star.style.top = newPosY + "px";


}

function mouseUp(e) {
  isDragging = false;
  document.removeEventListener("mousemove", mouseMove)
}


function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
  document.getElementById("nav-bar").classList.toggle("expanded");


}