function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
const main = document.querySelector('main')
function show(html) {
  main.innerHTML = html  
}
function init() {
  move.start()
}

