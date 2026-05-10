// SELECT FORM

const sellForm =
document.querySelector(".sell-form");


// GET USER

const user =
JSON.parse(localStorage.getItem("user"));


// SUBMIT EVENT

sellForm.addEventListener(
  "submit",
  function(event){

    event.preventDefault();

    // GET INPUT VALUES

    const title =
    document.querySelector("#title").value;

    const price =
    document.querySelector("#price").value;

    const category =
    document.querySelector("#category").value;

    const image =
    document.querySelector("#image").value;

    // CREATE PRODUCT OBJECT

    const newProduct = {

      id: Date.now(),

      title: title,

      price: Number(price),

      category: category,

      image: image,

      seller: user.name,

      sellerEmail: user.email,
    
      custom: true
    };

    // GET EXISTING PRODUCTS

    let customProducts =
    JSON.parse(
      localStorage.getItem("customProducts")
    ) || [];

    // ADD NEW PRODUCT

    customProducts.push(newProduct);

    // SAVE PRODUCTS

    localStorage.setItem(
      "customProducts",
      JSON.stringify(customProducts)
    );

    alert("Product Added Successfully!");

    // REDIRECT

    window.location.href =
    "index.html";

  }
);