
// footer
let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("theYear").textContent = myYear;
document.querySelector("#lu").textContent = `Last Updated:  ${document.lastModified}`;

// custom
let myName = document.querySelector(".myName");
myName.textContent = "Ben Ekstrand";
let myloc = document.querySelector(".myloc");
myloc.textContent = "Spokane, WA";
//let theTitle = document.querySelector("h1").textContent;
//document.querySelector("title").textContent = `${theTitle}: ${myName}`;