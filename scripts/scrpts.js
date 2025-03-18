const choices = document.getElementsByClassName("click-here");
const hexNumber = document.getElementsByClassName("hex-number")[0];

//when button is clicked do this
choices[0].addEventListener("click", function () {
  result = "";
  newValue = "0123456789ABCDEF";
  for (i = 0; i < 16; i++) {
    randomIndex = Math.floor(Math.random() * newValue.length);
    result += newValue[randomIndex];
    hexNumber.innerHTML = result;
  }
});
