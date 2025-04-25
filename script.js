const ratingComponent = document.querySelector(".rating-component-container");
const ratingForm = document.getElementById("rating-form");
const ratingInputOptions = document.querySelectorAll("input[name='rating']");
const thankYouStateComponent = document.querySelector(".thank-you-state");
const ratingResultDisplay = document.querySelector(".rating-result-display");

const changeElementDisplayState = (element, displayState) => {
  element.style.display = displayState;
};

const getRatingValue = () => {
  let ratingValue = null;
  ratingInputOptions.forEach((input) => {
    if (input.checked) {
      ratingValue = input.value;
    }
  });
  return ratingValue;
};

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ratingValue = getRatingValue();

  if (!ratingValue) {
    alert("Please select a rating before submitting.");
    return;
  }

  ratingResultDisplay.textContent = `You selected ${ratingValue} out of 5`;
  changeElementDisplayState(ratingComponent, "none");
  changeElementDisplayState(thankYouStateComponent, "flex");
});
