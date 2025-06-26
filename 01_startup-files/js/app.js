const $inputName = document.querySelector("#name");
const $jobTitleSelect = document.querySelector("#title");
const $inputOtherTitle = document.querySelector("#other-title");
const $designSelect = document.querySelector("#design");
const $totalPrice = document.querySelector(".totalPrice")

const $puns = document.querySelectorAll(".puns");
const $heart = document.querySelectorAll(".heart");
const $base = document.querySelector(".base");
const $activitiesPrice = document.querySelectorAll(".activities input");

let totalPrice = 0

// console.log($inputName);
// console.log($jobTitleSelect);

// console.log($puns);
// console.log($heart);

console.log($activitiesPrice);

document.addEventListener("DOMContentLoaded", function (event) {
  $inputName.focus();

  $jobTitleSelect.addEventListener("change", function (e) {
    console.log(e.target.value);

    if (e.target.value === "other") {
      $inputOtherTitle.classList.remove("is-hidden");
    } else {
      $inputOtherTitle.classList.add("is-hidden");
    }
  });

  $designSelect.addEventListener("change", function (e) {
    console.log(e.target.value);
    if (e.target.value === "js puns") {
      for (let i = 0; i < $puns.length; i++) {
        $puns[i].classList.remove("is-hidden");
      }

      for (let i = 0; i < $heart.length; i++) {
        $heart[i].classList.add("is-hidden");
      }
    } else if (e.target.value === "heart js") {
      for (let i = 0; i < $puns.length; i++) {
        $puns[i].classList.add("is-hidden");
      }

      for (let i = 0; i < $heart.length; i++) {
        $heart[i].classList.remove("is-hidden");
      }
    } else {
      for (let i = 0; i < $puns.length; i++) {
        $puns[i].classList.remove("is-hidden");
      }

      for (let i = 0; i < $heart.length; i++) {
        $heart[i].classList.remove("is-hidden");
      }
    }
  });

  for (let i = 0; i < $activitiesPrice.length; i++) {
    $activitiesPrice[i].addEventListener("change", function (e) {
      const price = parseInt(e.target.getAttribute("data-price"))
      if (e.target.checked) {
        totalPrice += price
      } else {
        totalPrice -= price
      }
      console.log(totalPrice)
      $totalPrice.textContent = totalPrice
    });
  }
});
