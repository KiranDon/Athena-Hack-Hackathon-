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

///products....
let products = [
    {
        name: "Camera",
        price: 30000,
        imageURL: "images/cam.jfif"
    },
    {
        name: "Headphone",
        price: 2000,
        imageURL: "images/headphone.jfif"
    },
    {
        name: "Spects",
        price: 600,
        imageURL: "images/spects.jfif"
    }
];
let cartItems = [];

let buttons = document.getElementsByClassName('addToCart');

// console.log(buttons)
function addToCart(e){
    let item = e.target.parentElement.id;
    cartItems.push(products[item]);
    console.log("added to cart");
    console.log(cartItems)
    alert("Item added to cart.");
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// buttons.forEach(button => {
//     button.addEventListener('click', addToCart);
// });

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', addToCart);
}