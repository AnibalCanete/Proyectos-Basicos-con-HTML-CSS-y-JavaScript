
// Elementos - Elements
const cerrarModal = document.querySelector(".modal-cerrar");
const abrirModal = document.querySelector(".hero-cta");
const modal = document.querySelector(".modal");

abrirModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("modal-mostrar");
});

cerrarModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal-mostrar");
});
