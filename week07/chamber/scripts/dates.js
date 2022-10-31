//Banner
let banner = document.getElementById("banner");
let dayOfWeek = date.getDay();
if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

//Last site update//
const lastUpdate = document.querySelector("#lastUpdate");
lastUpdate.innerHTML = date.toLocaleDateString("en-UK", options);

//Copyright//
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();