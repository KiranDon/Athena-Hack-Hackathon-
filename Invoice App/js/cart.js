let cartItems = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('cartItems'))));

console.log(cartItems)

// console.log(document.getElementById("table").innerHTML);
let subTotal = 0;

cartItems.forEach(item => {
    subTotal += item.price;
    document.getElementById("table").innerHTML += `<tr>
<td><div class="sideBySide">
    <img src="${item.imageURL}" class="smallImage">
    <h3 class="cartItemName">${item.name}<br><span>(Ordered by ${Math.floor(Math.random()*20+1)} people recently)</span></h3>
    
</div></td>
<td><h3 class="cartItemPrice">${item.price}</h3></td>
</tr>`

});

document.getElementById("subTotal").innerHTML = "INR "+subTotal;
localStorage.setItem("cartItems", JSON.stringify(cartItems));
/* <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */
// var element = document.getElementById('download');
// html2pdf(element);

