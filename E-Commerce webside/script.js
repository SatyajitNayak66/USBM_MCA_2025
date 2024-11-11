// Image Slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//product management :
// Fetch products and display them on the Products page
async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const productList = document.getElementById('product-list');
    products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
    <h3>${product.title}</h3>
    <img src="${product.image}" alt="${product.title}"
    width="100">
    <p>$${product.price}</p>
    <button onclick="addToCart(${product.id},
    '${product.title}', ${product.price}, '${product.image}')">Add to
    Cart</button>
    `;
    productList.appendChild(productDiv);
    });
    }
    // Add product to the cart and save to local storage
    function addToCart(id, title, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id, title, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${title} has been added to your cart!`);
    }
    // Display cart items on the Cart page
    function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
    }
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
    <h3>${item.title}</h3>
    <img src="${item.image}" alt="${item.title}" width="100">
    <p>Price: $${item.price}</p>
    <button onclick="removeFromCart(${index})">Remove from
    Cart</button>
    `;
    cartItems.appendChild(cartItemDiv);
    });
    }
    // Remove item from cart
    function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Refresh the cart display
    }
    // Call functions based on the page
    if (document.getElementById('product-list')) {
    fetchProducts();
    }
    if (document.getElementById('cart-items')) {
    displayCartItems();
    }

// Login Form (Basic)
const users = JSON.parse(localStorage.getItem("users")) || [];

// To manipulate HTML elements
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// Display dashboard if the user is logged in
function showView(view) {
  document.getElementById("signup").style.display =
    view === "signup" ? "block" : "none";
  document.getElementById("login").style.display =
    view === "login" ? "block" : "none";
  document.getElementById("dashboard").style.display =
    view === "dashboard" ? "block" : "none";
}

// Show view

// Add events
signupBtn.addEventListener("click", signUp);
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);

function signUp() {
  const username = document.getElementById("username").value;
  const useremail = document.getElementById("useremail").value;
  const userpassword = document.getElementById("userepassword").value;

  const newUser = {
    name: username,
    email: useremail,
    password: userpassword,
  };

  // Check if user already exists
  const userExists = users.find((user) => user.name === username);
  if (userExists) {
    alert("Username already exists. Please choose a different one.");
    return;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! You can now log in.");
  showView("login");

  // document.getElementById("username").value = "";
  // document.getElementById("useremail").value = "";
  // document.getElementById("userepassword").value = "";
}

// login
function login() {
  const useremail = document.getElementById("useremail").value;
  const userpassword = document.getElementById("userepassword").value;

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = storedUsers.find(
    (user) => user.email === useremail && user.password === userpassword
  );

  if (user) {
    const loggedUser = localStorage.setItem("loggedUser", JSON.stringify(user));
    alert("Login successful!");
    showDashboard();
  } else {
    alert("Invalid credentials");
  }

  // document.getElementById("useremail").value = "";
  // document.getElementById("userepassword").value = "";
}

// Show dashboard with a welcome message
function showDashboard() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  document.getElementById(
    "usernameDisplay"
  ).innerText = `Hey ${user.name} welcome !!`;
  showView("dashboard");
}

// Logout function
function logout() {
  localStorage.removeItem("loggedUser");
  alert("You've successfully logged out !!");
  showView("signup");
}


