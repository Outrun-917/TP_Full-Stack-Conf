const $inputName = document.querySelector("#name")
const $jobTitleSelect = document.querySelector("#title")
const $inputOtherTitle = document.querySelector("#other-title")
const $designSelect = document.querySelector("#design")
const $puns = document.querySelector(".puns")
const $heart = document.querySelector(".heart")
const $base = document.querySelector(".base")

console.log($inputName)
console.log($jobTitleSelect)

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Hello");
  $inputName.focus()

  $jobTitleSelect.addEventListener("change", function(e) {
    console.log(e.target.value)

    if (e.target.value === "other") {
        $inputOtherTitle.classList.remove("is-hidden")
    } else {
        $inputOtherTitle.classList.add("is-hidden")
    }
  })

  $designSelect.addEventListener("change", function(e) {
    console.log(e.target.value)

    if (e.target.value === "js puns") {
        $puns.classList.remove("is-hidden")
        $heart.classList.add("is-hidden")
    } else if (e.target.value === "heart js") {
        $puns.classList.add("is-hidden")
        $heart.classList.remove("is-hidden")
    } else {
        $puns.classList.remove("is-hidden")
        $heart.classList.remove("is-hidden")
    }
  })
});
