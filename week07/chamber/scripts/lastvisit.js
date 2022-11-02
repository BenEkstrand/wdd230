let lastVisit;

const msToDays = 86400000;

if ("lastVisit" in localStorage) {
  lastVisit = localStorage.getItem("lastVisit");
} else {
  lastVisit = Date.now();
}

const numberofDays = Math.round((Date.now() - lastVisit) / msToDays);

localStorage.lastVisit = Date.now();
console.log(numberofDays);

document.getElementById("last-visit").textContent = numberofDays;