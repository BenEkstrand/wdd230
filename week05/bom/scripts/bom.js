const list = document.querySelector(".list");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  let chapter = input.value;
  if (input.value == "") {
  alert ("Please add a chapter.");
  return false;
  }
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = chapter;
  listItem.appendChild(listBtn);
  listBtn.innerHTML = "&#10060;";
  list.appendChild(listItem);

  listBtn.addEventListener("click", function () {
    list.removeChild(listItem);
  });

  input.focus();
});