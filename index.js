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

const DISPLAY_NUM = document.querySelectorAll(".display_num");
const ADD_BTN = document.querySelectorAll(".increase_btn");
const SUBTRACT_BTN = document.querySelectorAll(".decrease_btn");
const LOVE_BTN = document.querySelectorAll(".love_btn");
const PRICE = document.querySelectorAll(".price");
const T_PRICE = document.querySelectorAll(".t_price");
const ALL_TOTAL = document.getElementById("allTotal");
const DELETE_BTN = document.querySelectorAll(".lucide-trash-2");

// Adding event listeners
ADD_BTN.forEach((btn, index) => {
  btn.addEventListener("click", () => addFunction(index));
});

SUBTRACT_BTN.forEach((btn, index) => {
  btn.addEventListener("click", () => subFunction(index));
});

LOVE_BTN.forEach((btn, index) => {
  btn.addEventListener("click", () => updateLove(index));
});

DELETE_BTN.forEach((btn, index) => {
  btn.addEventListener("click", () => deleteItem(index));
});

// Functions
function addFunction(index) {
  const cartValue = DISPLAY_NUM[index].textContent;
  let num = parseInt(cartValue, 10) + 1;
  DISPLAY_NUM[index].textContent = num;
  totalPrice(index);
  updateAllTotal(); // Update all total after adding
}

function subFunction(index) {
  let SUB = parseInt(DISPLAY_NUM[index].textContent, 10);
  SUB = Math.max(1, SUB - 1); // Ensure it doesn't go below 1
  DISPLAY_NUM[index].textContent = SUB;
  subTotal(index);
  updateAllTotal(); // Update all total after subtracting
}

function totalPrice(index) {
  let total =
    parseInt(T_PRICE[index].textContent, 10) +
    parseInt(PRICE[index].textContent, 10);
  T_PRICE[index].textContent = total;
}

function subTotal(index) {
  let total =
    parseInt(T_PRICE[index].textContent, 10) -
    parseInt(PRICE[index].textContent, 10);
  total = Math.max(parseInt(PRICE[index].textContent, 10), total); // Ensure it doesn't go below the price of one item
  T_PRICE[index].textContent = total;
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
  const updatedTPrice = document.querySelectorAll(".t_price"); // Re-query T_PRICE
  updatedTPrice.forEach((price) => {
    allTotal += parseInt(price.textContent, 10);
  });
  ALL_TOTAL.textContent = allTotal;
}

function deleteItem(index) {
  const sectionToDelete = DISPLAY_NUM[index].closest(".delete");
  if (sectionToDelete) {
    sectionToDelete.remove();
    updateAllTotal(); // Update the overall total after deletion
  }
}

// Initialize the total display
updateAllTotal();
