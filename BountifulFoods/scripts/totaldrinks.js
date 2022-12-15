

// get value from html
const totalDrinks = document.querySelector('#numDrinks');

// declare variable to record number of drinks ordered
//let drinksOrdered = 0;

// create local storage space
localStorage.setItem("drinksOrdered", "0");

// increment orders by 1 each time an order is submitted
// const addOrder = () => {
//     drinksOrdered++;
//     return drinksOrdered;
// };

if(errorCode === 4936){
    var drinksOrdered = localStorage.getItem("drinksOrdered");
    localStorage.setItem("drinksOrdered", ++drinksOrdered);
    console.log(drinksOrdered);
  }

totalDrinks.innerHTML = drinksOrdered;

// need to link this to the fresh page

