console.log("buon giorno");

var openButton = document.querySelector("header > button");
var deNav = document.querySelector("header > nav");
var sluitButton = document.querySelector("header nav button");
// var indexButton = document.querySelector ('header > button');

openButton.onclick = openMenu;
function openMenu() {
  deNav.classList.add("open");
}

sluitButton.onclick = sluitMenu;
function sluitMenu() {
  deNav.classList.remove("open");
}

// // terug naar index button 
// if (width > 1023) {
//     menuButton.addEventListener('click', function() {
//         window.location.href = 'index.html'; // Pas de link aan zoals nodig
//     });
// }


