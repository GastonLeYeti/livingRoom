window.addEventListener('load', function () {
  lamp();
});

function lamp() {
  document.getElementById('lamp_container').onclick = function () {

    document.getElementById('lampBase').classList.toggle("move");
    document.getElementById('lampShade').classList.toggle("move");
    document.getElementById('light').classList.toggle("move");

    document.getElementById('lampBase').classList.toggle("moving");
    document.getElementById('lampShade').classList.toggle("moving");
    document.getElementById('light').classList.toggle("moving");

    setTimeout(function () {
      document.getElementById('lampBase').classList.toggle("moving");
      document.getElementById('lampShade').classList.toggle("moving");
      document.getElementById('light').classList.toggle("moving");
    }, 425);

  }; //function
} //function lamp