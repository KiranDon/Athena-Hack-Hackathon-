//script for modal starts here...
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.closeButton');

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeButton.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    if(e.keyCode===27 && !modal.classList.contains('hidden'))
    {
        closeModal();
    }
});
//script for modal ends here...

