(() => {
    const refs = {
      openModalBtn: document.querySelector("[nav__menu-container-open]"),
      closeModalBtn: document.querySelector("[nav__menu-container-close]"),
      modal: document.querySelector("[nav__menu-container]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
