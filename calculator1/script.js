const displayNumber = document.getElementById("displayNumber");

const button = document.querySelectorAll("button");

const handleBtnClick = (el) => {
  if (el.innerHTML.trim() === "=") {
    const value = displayNumber.innerHTML.slice("&nbsp;".length - 1);
    displayNumber.innerHTML = eval(value);
  } else {
    displayNumber.innerHTML += el.innerHTML.trim();
  }
};
