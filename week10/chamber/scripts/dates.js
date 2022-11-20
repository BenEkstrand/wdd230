//Copyright//
document.getElementById('copyrightyear').innerHTML = new
Date().getFullYear();

//Last site update//
const lastUpdate = document.querySelector("#lastUpdate");
lastUpdate.innerHTML = document.lastModified;

//Banner
// let ddate = new Date();
// let banner = document.getElementById("banner");
// let dayOfWeek = ddate.getDay();
// if (dayOfWeek == 1 || dayOfWeek == 2) {
//     banner.style.display = "block";
// } else {
//     banner.style.display = "none";
// }
