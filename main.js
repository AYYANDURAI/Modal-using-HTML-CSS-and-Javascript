var modal = document.querySelector(".simple-modal");
var modalBtn = document.querySelector(".modal-btn");
var closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
    modal.style.display = "block";
    modalBtn.style.pointerEvents = "none";
}
function closeModal() {
    modal.style.display = "none";
    modalBtn.style.pointerEvents = "all";
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = "none";
        modalBtn.style.pointerEvents = "all";
    }
}