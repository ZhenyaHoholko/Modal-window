const btn=document.getElementById("open-modal");
const modal=document.getElementById("modal1");
const closeBtn=document.querySelector(".modal__close");
//привязываю кнопки к переменным

btn.onclick=()=>{
    modal.classList.add("modal_active");

    closeBtn.addEventListener("click",closeModal);

    modal.addEventListener("click", hideModal);

    function closeModal() {
        modal.classList.remove("modal_active");
        closeBtn.removeEventListener('click',closeModal);
        modal.removeEventListener('click',hideModal)
    }
    // закрытие модального окна нажатием на крестик и в любой области вне окна

    function hideModal(event){
        if (event.target===modal){
            closeModal();
        }
    }
}
//Удаление активного класса. Работает в случае открытия этого окна. Необходим для экономии памяти пользователя. Скрытие модального окна.
