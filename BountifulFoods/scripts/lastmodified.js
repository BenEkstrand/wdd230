const lastUpdate = document.querySelector(".lastUpdate");
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
    lastUpdate.textContent = new Date().toLocaleDateString("en-US", options);
