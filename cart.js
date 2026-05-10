// SELECT ELEMENTS

const cartContainer =
document.querySelector(".cart-container");

const totalPrice =
document.querySelector(".total-price");


// GET CART DATA

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];


// DISPLAY CART ITEMS

function displayCart() {

  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach(function(product, index) {

    total += product.price;

    const cartItem =
    document.createElement("div");

    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `

      <div class="cart-left">

        <img src="${product.image}" />

        <div class="cart-details">

          <h3>${product.title}</h3>

          <p>${product.category}</p>

        </div>

      </div>

      <div class="cart-right">

        <h2>₹${product.price}</h2>

        <button class="remove-btn">
          Remove
        </button>

      </div>

    `;

    // REMOVE BUTTON

    const removeButton =
    cartItem.querySelector(".remove-btn");

    removeButton.addEventListener(
      "click",
      function () {

        removeFromCart(index);

      }
    );

    cartContainer.appendChild(cartItem);

  });

  totalPrice.innerText =
  `Total: ₹${total}`;

}


// REMOVE FUNCTION

function removeFromCart(index) {

  cart.splice(index, 1);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  displayCart();

}


// INITIAL CALL

displayCart();