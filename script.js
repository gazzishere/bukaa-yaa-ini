const nextPageButton = document.getElementById('nextPageButton');
const backButton = document.getElementById('backButton');
const card = document.querySelector('.card');

nextPageButton.addEventListener('click', () => {
  card.classList.add('show-third');
});

backButton.addEventListener('click', () => {
  card.classList.remove('show-third');
});

document.getElementById("nextToPage4Button").addEventListener("click", function () {
  document.getElementById("thirdPage").style.display = "none";
  document.getElementById("fourthPage").style.display = "block";
  nextPageButton.style.display = "none";
});

document.getElementById("backButton2").addEventListener("click", function () {
  document.querySelector(".thirdPage").style.display = "none";
  document.querySelector(".fourthPage").style.display = "none";
  document.querySelector(".imgBox").style.display = "block";
  document.querySelector(".details").style.display = "block";
  document.getElementById("nextPageButton").style.display = "block";
});
