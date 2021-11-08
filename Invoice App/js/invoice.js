let cartItems = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('cartItems'))));
// console.log(cartItems)
let userData = JSON.parse(localStorage.getItem("userData"));
// console.log(userData)

let customerFeild = document.getElementById('customer');
customerFeild.innerHTML += `<p>${userData.name},</p>
<p>${userData.email},</p>
<p>${userData.phone},</p>
<p>${userData.address},</p>`;

let invoiceFeild = document.getElementById("inv");
invoiceFeild.innerHTML += `<h3>Invoice number: <span>${Math.floor(Math.random()*200)+1}</span></h3>
<h3>Invoice Date: <span>${userData.date}</span></h3>
<h3>Invoice Time: <span>${userData.time}</span></h3>`;

let list = document.getElementById("list");
let total=0;
cartItems.forEach(item => {
    total+=item.price;
    list.innerHTML += `<tr>
    <td>${item.name}</td>
    <td>1</td>
    <td>${item.price}</td>
</tr>`;
});
document.getElementById("subTotal").innerHTML = total;

if(userData.method == 'cod'){
    document.getElementById("paid").innerHTML = "Not Paid (COD)";
    document.getElementById("paid").classList.add("red");
}else{
    document.getElementById("paid").innerHTML = "PAID";
    document.getElementById("paid").classList.add("green");

}

function download(){
    var element = document.getElementById('invoice');
    html2pdf(element);
}
setTimeout(download, 2000);
setTimeout(()=>{
    localStorage.removeItem("cartItems");
}, 3000);
setTimeout(()=>{
    window.location = "index.html";
}, 4000);