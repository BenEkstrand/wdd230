// select HTML elements in the document
const temp1 = document.querySelector('#temp1');
const icon1 = document.querySelector('#icon1');
const cap1 = document.querySelector('#cap1');
const hum1 = document.querySelector('#hum1');

const temp2 = document.querySelector('#temp2');
const icon2 = document.querySelector('#icon2');
const cap2 = document.querySelector('#cap2');
const hum2 = document.querySelector('#hum2');

const temp3 = document.querySelector('#temp3');
const icon3 = document.querySelector('#icon3');
const cap3 = document.querySelector('#cap3');
const hum3 = document.querySelector('#hum3');

// API url for Carlsbad, CA
 const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&limit=5&appid=a17f5875d88668d8c58a812722d0f774&cnt=3';
// Function to fetch API
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

// Weather to Uppercase
function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// Function to display data
function displayResults(weatherData) {
    // Temp display
    temp1.innerHTML = `${weatherData.forecast[0].temp.day.toFixed(0)}`;
    // Weather description and icon display
    const desc1 = capitalize(weatherData.forecast[0].weather[0].description);
    cap1.textContent = desc1;
    icon1.src = `https://openweathermap.org/img/w/${weatherData.forecast[0].weather[0].icon}.png`;
    icon1.alt = desc1;
    // Humidity
    hum1.innerHTML = `${weatherData.forecast[0].humidity}`;

    // Temp display
    temp2.innerHTML = `${weatherData.forecast[1].temp.day.toFixed(0)}`;
    // Weather description and icon display
    const desc2 = capitalize(weatherData.forecast[1].weather[0].description);
    cap2.textContent = desc2;
    icon2.src = `https://openweathermap.org/img/w/${weatherData.forecast[1].weather[0].icon}.png`;
    icon2.alt = desc2;
    // Humidity
    hum2.innerHTML = `${weatherData.forecast[1].humidity}`;

    // Temp display
    temp3.innerHTML = `${weatherData.forecast[2].temp.day.toFixed(0)}`;
    // Weather description and icon display
    const desc3 = capitalize(weatherData.forecast[2].weather[0].description);
    cap3.textContent = desc3;
    icon3.src = `https://openweathermap.org/img/w/${weatherData.forecast[2].weather[0].icon}.png`;
    icon3.alt = desc3;
    // Humidity
    hum3.innerHTML = `${weatherData.forecast[2].humidity}`;
    
}

apiFetch();