// What You're Aiming For

// For this checkpoint you’ll have to recreate a shopping cart. In this scenario, it’s a cart in which items have already been preselected and from this particular screen the user is able to apply the following instructions:

// You will create The JS needed for a shopping cart  to be fully fonctionnel

// Instructions

// Adjust the quantity of each item through  “+” and “-” buttons.
// Delete items from the cart.
// Like items through a clickable heart-shaped button that will change color accordingly.
// See the total price adjusted according to quantity and deletions.
// Use the CSS & the HTML provided HERE
// Apply the necessary JS DOM Events to  ensure that we can :

/*

const DISPLAY_NUM = document.getElementById("display_num");
const ADD_BTN = document.getElementById("increase_btn");
const SUBTRACT_BTN = document.getElementById("decrease_btn");
const DELETE_BTN = document.getElementById("delete");
const LOVE_BTN = document.getElementById("love_btn");
const PRICE = document.getElementById("price");
const T_PRICE = document.getElementById("t_price");


ADD_BTN.addEventListener("click", addFunction);
SUBTRACT_BTN.addEventListener("click", subFunction);
LOVE_BTN.addEventListener("click", updateLove);

function addFunction() {
  const cartValue = DISPLAY_NUM.textContent;
  const cartNumber = parseInt(cartValue, 10);
  let num = cartNumber;

  num++;

  DISPLAY_NUM.textContent = num;
  totalPrice();
}

function subFunction() {
  const SUBNUM = DISPLAY_NUM.textContent;
  let SUB = parseInt(SUBNUM, 10);

  SUB--;
  if (SUB < 1) {
    SUB = 1;
  }

  DISPLAY_NUM.textContent = SUB;
  subTotal();
}

function totalPrice() {
  let total = parseInt(T_PRICE.textContent) + parseInt(PRICE.textContent);

  T_PRICE.textContent = total;
}

function subTotal() {
  let total = parseInt(T_PRICE.textContent) - parseInt(PRICE.textContent);
  if (total <= parseInt(PRICE.textContent)) {
    total = parseInt(PRICE.textContent);
  }
  T_PRICE.textContent = total;
}

let colorState = false;

function updateLove() {
  if (!colorState) {
    LOVE_BTN.style.fill = "red";
    colorState = true;
  } else {
    LOVE_BTN.style.fill = "";
    colorState = false;
  }
}

*/

const DISPLAY_NUM = document.querySelectorAll(".display_num"); // Selecting all elements with the class 'display_num'
const ADD_BTN = document.querySelectorAll(".increase_btn"); // Selecting all elements with the class 'increase_btn'
const SUBTRACT_BTN = document.querySelectorAll(".decrease_btn"); // Selecting all elements with the class 'decrease_btn'
const LOVE_BTN = document.querySelectorAll(".love_btn"); // Selecting all elements with the id 'love_btn'
const PRICE = document.querySelectorAll(".price"); // Selecting all elements with the class 'price'
const T_PRICE = document.querySelectorAll(".t_price"); // Selecting all elements with the class 't_price'
const ALL_TOTAL = document.getElementById("allTotal"); //Selecting the element with the id 'allTotal'

// Adding event listeners for each add and subtract button (assuming you have multiple buttons)
ADD_BTN.forEach((btn, index) => {
  btn.addEventListener("click", () => addFunction(index)); // Passing the index to identify which element to update
});

SUBTRACT_BTN.forEach((btn, index) => {
  btn.addEventListener("click", () => subFunction(index)); // Same for subtract button
});

LOVE_BTN.forEach((btn, index) => {
  btn.addEventListener("click", () => updateLove(index));
});

function addFunction(index) {
  const cartValue = DISPLAY_NUM[index].textContent;
  const cartNumber = parseInt(cartValue, 10);
  let num = cartNumber;

  num++; // Increase the number

  DISPLAY_NUM[index].textContent = num; // Update the display
  totalPrice(index); // Update total price
}

function subFunction(index) {
  const SUBNUM = DISPLAY_NUM[index].textContent;
  let SUB = parseInt(SUBNUM, 10);

  SUB--; // Decrease the number
  if (SUB < 1) {
    SUB = 1; // Ensure it doesn't go below 1
  }

  DISPLAY_NUM[index].textContent = SUB; // Update the display
  subTotal(index); // Update the total price
}

function totalPrice(index) {
  let total =
    parseInt(T_PRICE[index].textContent) + parseInt(PRICE[index].textContent); // Add price to total

  T_PRICE[index].textContent = total; // Update total price display
}

function subTotal(index) {
  let total =
    parseInt(T_PRICE[index].textContent) - parseInt(PRICE[index].textContent); // Subtract price from total
  if (total <= parseInt(PRICE[index].textContent)) {
    total = parseInt(PRICE[index].textContent); // Ensure total doesn't drop below the price of one item
  }
  T_PRICE[index].textContent = total; // Update total price display
}

// Adding independent color states for each LOVE_BTN
let colorState = Array(LOVE_BTN.length).fill(false); // Array to keep track of each button's state

function updateLove(index) {
  if (!colorState[index]) {
    LOVE_BTN[index].style.fill = "red"; // Toggle to red when clicked
    colorState[index] = true; // Set the state for this button
  } else {
    LOVE_BTN[index].style.fill = ""; // Reset color to default
    colorState[index] = false; // Reset the state for this button
  }
}

function updateAllTotal() {
  let allTotal = 0;

  // Loop through all T_PRICE elements and sum their values
  T_PRICE.forEach((price) => {
    allTotal += parseInt(price.textContent, 10); // Convert textContent to a number and add to total
  });

  ALL_TOTAL.textContent = allTotal; // Update the allTotal element
}
updateAllTotal();

function totalPrice(index) {
  let total =
    parseInt(T_PRICE[index].textContent, 10) +
    parseInt(PRICE[index].textContent, 10); // Add price to total

  T_PRICE[index].textContent = total; // Update total price display
  updateAllTotal(); // Update the overall total for all items
}

function subTotal(index) {
  let total =
    parseInt(T_PRICE[index].textContent, 10) -
    parseInt(PRICE[index].textContent, 10); // Subtract price from total
  if (total <= parseInt(PRICE[index].textContent, 10)) {
    total = parseInt(PRICE[index].textContent, 10); // Ensure total doesn't drop below the price of one item
  }
  T_PRICE[index].textContent = total; // Update total price display
  updateAllTotal(); // Update the overall total for all items
}
