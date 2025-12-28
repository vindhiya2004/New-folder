[3:57 pm, 25/12/2025] 🎼: <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>UPI Payment</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
<h1>Complete Your Payment</h1>
</header>

<div class="upi-section">

<h2>Total Amount</h2>
<h3 id="totalAmount">₹0</h3>

<img src="images/upi-qr.jpg" class="upi-img" alt="UPI QR Code">

<p>
Scan & Pay using <br>
✔ Google Pay <br>
✔ PhonePe <br>
✔ Paytm
</p>

<p><b>UPI ID:</b> yourupi@bank</p>

<a id="whatsappLink" class="btn">Send Payment Screenshot</a>

</div>

<script src="script.js"></script>

</body>
</html>
[3:59 pm, 25/12/2025] 🎼: let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart");
}

function displayCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
        <p>${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">❌</button></p>`;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function goToPayment() {
    window.location.href = "payment.html";
}

/* Payment Page */
if(document.getElementById("totalAmount")){
    let total = cart.reduce((sum,item)=>sum+item.price,0);
    document.getElementById("totalAmount").innerText = "₹" + total;

    let message = "Hello, I have paid via UPI.%0AOrder Details:%0A";
    cart.forEach(item=>{
        message += item.name + " - ₹" + item.price + "%0A";
    });
    message += "Total: ₹" + total;

    document.getElementById("whatsappLink").href =
    "https://wa.me/919600738432?text=" + message;
}

if(document.getElementById("cart-items")){
    displayCart();
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let shippingCharge = 40;

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}

function displayCart() {
  let cartItems = document.getElementById("cartItems");
  let totalAmount = document.getElementById("totalAmount");

  if (!cartItems || !totalAmount) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <p>
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">❌</button>
      </p>
    `;
  });

  totalAmount.innerText = total + shippingCharge;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function proceedToPayment() {
  let total = document.getElementById("totalAmount").innerText;

  if (!total || total == 0) {
    alert("Cart is empty");
    return;
  }

  let upiURL =
    "upi://pay?pa=srm.rpt@okhdfcbank&pn=HerbalStore&am=" +
    total +
    "&cu=INR";

  window.location.href = upiURL;
}

window.onload = displayCart;
function loadCart() {
  let cartItemsDiv = document.getElementById("cartItems");
  let total = 0;

  cartItemsDiv.innerHTML = "";

  cart.forEach(item => {
    cartItemsDiv.innerHTML += <p>${item.name} - ₹${item.price}</p>;
    total += item.price;
  });

  // Shipping charge
  let shipping = 40;
  total += shipping;

  document.getElementById("totalAmount").innerText = total;
}

if (document.getElementById("cartItems")) {
  loadCart();
}