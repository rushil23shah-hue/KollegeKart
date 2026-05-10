// SELECT PRODUCT CONTAINER
let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

const productContainer =
document.querySelector(".product-container");


// PRODUCT DATA

const products = [

  {
    id: 1,
    title: "Scientific Calculator",
    price: 1299,
    category: "Electronics",
    image:
    "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000"
  },

  {
    id: 2,
    title: "Engineering Drawing Kit",
    price: 799,
    category: "Academic",
    image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000"
  },

  {
    id: 3,
    title: "DBMS Textbook",
    price: 499,
    category: "Books",
    image:
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000"
  },

{
  id: 4,
  title: "Laptop Stand",
  price: 999,
  category: "Accessories",
  image:
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000"
},
  {
    id: 5,
    title: "Study Table Lamp",
    price: 699,
    category: "Hostel",
    image:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000"
  },

  {
    id: 6,
    title: "Wireless Mouse",
    price: 599,
    category: "Electronics",
    image:
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000"
  },

  {
    id: 7,
    title: "DLD Project Kit",
    price: 1499,
    category: "Project Kits",
    image:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
  },

  {
    id: 8,
    title: "White Lab Coat",
    price: 899,
    category: "Lab Essentials",
    image:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000"
  },

  {
    id: 9,
    title: "DSA Handwritten Notes",
    price: 299,
    category: "Notes",
    image:
    "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?q=80&w=1000"
  },

  {
    id: 10,
    title: "Arduino Starter Kit",
    price: 1799,
    category: "Project Kits",
    image:
    "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1000"
  },

  {
    id: 11,
    title: "Operating Systems Notes",
    price: 349,
    category: "Notes",
    image:
    "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000"
  },

  {
    id: 12,
    title: "Mini Desk Organizer",
    price: 499,
    category: "Hostel",
    image:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000"
  }

];

// GET CUSTOM PRODUCTS

const customProducts =
JSON.parse(
  localStorage.getItem("customProducts")
) || [];


// MERGE PRODUCTS

const allProducts = [

  ...products,

  ...customProducts

];
// FUNCTION TO DISPLAY PRODUCTS

function displayProducts() {

  allProducts.forEach(function(product) {

    // CREATE CARD

    const card =
    document.createElement("div");

    // ADD CLASS

    card.classList.add("product-card");

    // CARD HTML

    card.innerHTML = `

      <img src="${product.image}" />

      <h3>${product.title}</h3>

      <p>${product.category}</p>

      <span class="price">
        ₹${product.price}
      </span>

     <button class="cart-btn">
  Add to Cart
</button>
${product.custom ? `
<button class="delete-btn">
  Delete Listing
</button>
` : ""}

    `;

    // APPEND CARD

    productContainer.appendChild(card);
    const cartButton =
card.querySelector(".cart-btn");

cartButton.addEventListener(
  "click",
  function () {

    addToCart(product);

  }
);

  });

}


// CALL FUNCTION

displayProducts();

function addToCart(product) {

  cart.push(product);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  alert(product.title + " added to cart!");

}
// STUDY TIP API

const tipBox =
document.querySelector(".study-tip");


async function fetchStudyTip() {

  try {

    const response = await fetch(
      "https://api.quotable.io/random"
    );

    const data = await response.json();

    tipBox.innerText =
    `"${data.content}"`;

  }

  catch(error) {

    tipBox.innerText =
    "Stay consistent and keep learning 🚀";

  }

}


// CALL API FUNCTION

fetchStudyTip();