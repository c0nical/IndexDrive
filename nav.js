// Получите ссылку на изображение и модальное окно
var image = document.getElementById("myImage");
var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Установите изображение и подпись в модальное окно при клике на изображение
image.onclick = function() {
  modal.style.display = "block";
  modalImage.src = this.src;
  captionText.innerHTML = this.alt;
}

// Закрыть модальное окно при клике на "Закрыть" или за его пределами
var close = document.getElementsByClassName("close")[0];
window.onclick = function(event) {
  if (event.target == modal || event.target == close) {
    modal.style.display = "none";
  }
}