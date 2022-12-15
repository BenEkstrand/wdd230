
// Drink Counter for Index

if (document.querySelector("#numDrinks")){
  const orderCountDisplay = document.querySelector("#numDrinks");
  
   orderCountDisplay.innerHTML = Number(window.localStorage.getItem("orderCount-ls"));
  }
