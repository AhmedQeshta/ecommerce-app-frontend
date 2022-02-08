const closeModal = document.getElementById("close-modal");
const modalStarter = document.getElementById("modal-starter");

closeModal.addEventListener("click", () => {
    modalStarter.classList.toggle("modal-hidden");
});
