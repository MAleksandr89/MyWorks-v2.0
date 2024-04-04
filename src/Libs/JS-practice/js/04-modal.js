const modelButtons = document.querySelectorAll("[data-modal-button]");
const modalClosebuttons = document.querySelectorAll("[data-modal-close]");
const allModals = document.querySelectorAll("[data-modal]");

//Кнопки открыть модалку
modelButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector("#" + modalId);
    modal.classList.remove("hidden");

    //находим внутри открываемой модалки блок,modal-window и запрещаем ему передавать клики наверх.
    modal.querySelector(".modal-window").addEventListener("click", function (e) {
        e.stopPropagation();
      });
  });
});
//Кнопки закрыть модалку
modalClosebuttons.forEach(function (item) {
  item.addEventListener("click", function () {
    const modal = this.closest("[data-modal]");
    modal.classList.add("hidden");
  });
});
//закрытие модалку по фейду
allModals.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.add("hidden");
  });
});
