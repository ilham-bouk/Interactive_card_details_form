let cardNum = document.querySelector(".cardNum");
let cardName = document.querySelector(".bg-front .name");
let cardMonth = document.querySelector(".date .month");
let cardYear = document.querySelector(".date .year");
let cardCvc = document.querySelector(".bg-back span");

let inpNum = document.querySelector("#num-inp");
let inpName = document.querySelector("#name-inp");
let inpMonth = document.querySelector("#month-inp");
let inpYear = document.querySelector("#year-inp");
let inpCvc = document.querySelector("#cvc-inp");

let artForm = document.querySelector(".form");
let btnForm = document.querySelector(".form button");
let artComplet = document.querySelector(".complet");
let btnComplet = document.querySelector(".complet button");


inpName.addEventListener("input", function () {
  if (!inpName.value) {
    cardName.innerHTML = "Jane Appleseed";
  } else {
    cardName.innerHTML = inpName.value;
  }
});

inpNum.addEventListener("input", function () {  
  if (!inpNum.value) {
    cardNum.innerHTML = "0000 0000 0000 0000";
  } else {
    cardNum.innerHTML = formatNumber(inpNum.value);
  }
});

inpMonth.addEventListener("input", function () {  
  if (!inpMonth.value) {
    cardMonth.innerHTML = "00";
  } else {
    cardMonth.innerHTML = inpMonth.value;
  }
});

inpYear.addEventListener("input", function () {  
  if (!inpYear.value) {
    cardYear.innerHTML = "00";
  } else {
    cardYear.innerHTML = inpYear.value;
  }
});

inpCvc.addEventListener("input", function () {  
  if (!inpCvc.value) {
    cardCvc.innerHTML = "000";
  } else {
    cardCvc.innerHTML = inpCvc.value;
  }
});


btnForm.onclick = function () {
  if (inpName.value.length > 1) {
    if (inpName.parentElement.className.includes("error")) {
      inpName.parentElement.classList.remove("error");
      inpName.style.borderColor = "var(--Light-grayish-violet)";
    }
  } else {
    inpName.parentElement.classList.add("error");
  }

  if (inpNum.value.length == 16) {
    if (inpNum.parentElement.className.includes("error")) {
      inpNum.parentElement.classList.remove("error");
      inpNum.style.borderColor = "var(--Light-grayish-violet)";
    }
  } else {
    inpNum.parentElement.classList.add("error");
  }

  if (inpMonth.value > 0 && inpMonth.value < 13) {
    if (inpMonth.parentElement.parentElement.className.includes("mon")) {
      inpMonth.parentElement.parentElement.classList.remove("mon");
    }
    inpMonth.style.borderColor = "var(--Light-grayish-violet)";
  } else {
    inpMonth.parentElement.parentElement.classList.add("error");
    inpMonth.parentElement.parentElement.classList.add("mon");
  }

  if (inpYear.value > 0) {
    if (inpYear.parentElement.parentElement.className.includes("year")) {
      inpYear.parentElement.parentElement.classList.remove("year");
    }
    inpYear.style.borderColor = "var(--Light-grayish-violet)";
  } else {
    inpYear.parentElement.parentElement.classList.add("error");
    inpYear.parentElement.parentElement.classList.add("year");
  }

  if (inpMonth.value > 0 && inpMonth.value < 13 && inpYear.value > 0) {
    inpYear.parentElement.parentElement.classList.remove("error");
  }

  if (inpCvc.value.length == 3) {
    if (inpCvc.parentElement.className.includes("error")) {
      inpCvc.parentElement.classList.remove("error");
      inpCvc.style.borderColor = "var(--Light-grayish-violet)";
    }
  } else {
    inpCvc.parentElement.classList.add("error");
  }

  if (inpName.value.length > 1 && inpNum.value.length == 16 && 
      inpMonth.value > 0 && inpMonth.value < 13 && inpYear.value > 0 && 
      inpCvc.value.length == 3
  ) {
    artComplet.style.display = "block";
    artForm.style.display = "none";
  }
}

btnComplet.onclick = function () {
  artComplet.style.display = "none";
  artForm.style.display = "block";
  window.location.reload();
}


function formatNumber(cardNumber) {
  let str = String(cardNumber);
  return str.replace(/(\d{4})/g, '$1 ').trim();
}
