let allOrders = JSON.parse(localStorage.getItem("successfulOrders"));
console.log(allOrders);

allOrders.forEach(order => {
    document.getElementById("orders").innerHTML += `<tr>
    <td>${order.name}</td>
    <td>${order.amount}</td>
    <td>${order.dateAndTime}</td>
    <td>${order.status=='cod'?'NOT PAID (COD)':"PAID"}</td>
</tr>`;
});