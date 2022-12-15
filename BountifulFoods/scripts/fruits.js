
// Select all elements with class fruitOptions
let fruitOptions = document.querySelector(".fruitOptions");

  

// JSON file
const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

// Get JSON data

fetch(url)  
  .then(function(response) {  
  // Create and select fruits  
  response.json().then(function(jsonObject) {  
    let option;
    for (let i = 0; i < jsonObject.length; i++) {
      option = document.createElement('option');
      option.textContent = jsonObject[i].name;
      option.label = jsonObject[i].name;
      fruitOptions.add(option);
  }    
});
})


// Create function to display order
function displayOrder() {
  // Create elements to add to document
  let name = document.createElement('p');
  let email = document.createElement('p');
  let phone = document.createElement('p');
  let fruitChoice = document.createElement('p');
  let date = document.createElement('p');
  let carbs = document.createElement('p');
  let protein = document.createElement('p');
  let fat = document.createElement('p');
  let sugar = document.createElement('p');
  let calories = document.createElement('p');


  // Change the textContent property of the p elements to contain all order info
  name.textContent = `Name: ${name}`;
  email.textContent = `Email: ${email}`;
  phone.textContent = `Phone: ${phone}`;
  fruitChoice.textContent = `Fruits: ${fruitChoice}`;
  date.textContent = `Date: ${date}`;
  carbs.textContent = `Total Carbs: ${fruit.carbs}`;
  protein.textContent = `Total Protein: ${fruit.protein}`;
  fat.textContent = `Total Fat: ${fruit.fat}`;
  sugar.textContent = `Total Sugar: ${fruit.sugar}`;
  calories.textContent = `Total Calories: ${fruit.calories}`;

  // Display order info when order is submitted

}
