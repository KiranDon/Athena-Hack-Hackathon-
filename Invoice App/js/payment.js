let cartItems = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('cartItems'))));
console.log(cartItems)

let amountPayable = 0;
cartItems.forEach(item => {
    amountPayable += item.price;
});
document.getElementById("amountPayable").innerHTML = amountPayable;

let orders;
let temp = JSON.parse(localStorage.getItem("successfulOrders"));
if(temp != null){
    orders = temp;
}else{
    orders = [];
}
// console.log(temp)

let userData;

document.getElementById('pay').addEventListener("click", (e)=>{
    e.preventDefault;
    orders.push(cartItems);
    localStorage.setItem('successfulOrders', JSON.stringify(orders));
    // localStorage.removeItem("cartItems");
    // console.log();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let method = document.querySelector('input[name = paymentMethod]:checked').value;;
    
    userData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        method: method,
        date: `${new Date()}`.slice(0, 15),
        time: `${new Date()}`.slice(16, 25)
    }
    console.log(userData)
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location = "success.html";
})