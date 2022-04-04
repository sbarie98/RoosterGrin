/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {

  document.getElementById("myDropdown").classList.toggle("show");

  var y = document.getElementById("btn");
  if (y.innerHTML === "▸ Lorem Ipsum") {
    y.innerHTML = "▾ Lorem Ipsum";
   } 
  else {
    y.innerHTML = "▸ Lorem Ipsum";
  }
}

function myFunction2() {

  document.getElementById("myDropdown2").classList.toggle("show");

  var x = document.getElementById("btn2");
  if (x.innerHTML === "▸ Lorem Ipsum") {
    x.innerHTML = "▾ Lorem Ipsum";
   } 
  else {
    x.innerHTML = "▸ Lorem Ipsum";
  }
}
