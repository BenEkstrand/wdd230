// Store the URL of the JSON file
const requestURL = 'json/data.json';

// Get JSON data
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject); // temporary checking for valid response and data parsing
        const business = jsonObject['business'];
        business.forEach(showBusiness);
    });

// Create and display "cards" for each business
function showBusiness(business) {
    // Create elements to add to document
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('p');
    let membership = document.createElement('p');
    let established = document.createElement('p');
    let img = document.createElement('img');

    //change the textContent property of the h2 element to contain the business' name and info
    name.textContent = `${business.name}`
    address.textContent = `${business.address}`
    phone.textContent = `${business.phone}`
    url.textContent = `${business.url}`
    membership.textContent = `${business.membership}`
    established.textContent = `${business.established}`
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values
    img.setAttribute('src', business.imagesrc)
    img.setAttribute('alt', `${business.name}`)
    img.setAttribute("loading", "lazy");

    // Add/append the section(card) with the h2 element
    card.appendChild(img)
    card.appendChild(name)
    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(url)
    card.appendChild(membership)
    card.appendChild(established)
    document.querySelector('div.cards').appendChild(card)
}


// Transition between grid and list format
const gridButton = document.querySelector("#gridBtn");
const listButton = document.querySelector("#listBtn");
const display = document.querySelector("article");

// Using arrow function
gridButton.addEventListener("click", () => {
    display.classList.add("cards");
    display.classList.remove("list");
});
listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("cards");
});

