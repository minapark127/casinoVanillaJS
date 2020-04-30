// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const headingRange = document.querySelector(".js-headingRange"),
  inputRange = document.querySelector(".js-inputRange"),
  inputNumber = document.querySelector(".js-inputNumber"),
  submit = document.querySelector(".js-submit"),
  number = document.querySelector(".js-number"),
  result = document.querySelector(".js-result");

function genNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function handleSumbit(event) {
  event.preventDefault();
  const value = inputNumber.value;
  if (value) {
    const valueInt = parseInt(value);
    const maxRange = inputRange.value;
    const maxRangeInt = parseInt(maxRange);
    if (valueInt < 0 || valueInt > maxRangeInt) {
      result.innerText = "choose your number in range";
    } else {
      const randomNumber = genNumber(maxRangeInt);
      number.innerText = `Your number: ${valueInt}, My number: ${randomNumber}`;
      if (valueInt === randomNumber) {
        result.innerText = `😇Congrats, you won! You guessed right!😇`;
      } else {
        result.innerText = `😱😭Oops, you lost. Try again😭😱`;
      }
    }
  } else {
    result.innerText = `You need to choose number to play`;
  }
}

function handleRange(event) {
  const value = event.target.value;
  headingRange.innerText = `🎰 Generate a number between 0 and ${value} 🎰`;
  inputNumber.setAttribute("max", `${value}`);
  inputNumber.setAttribute("placeholder", `max number: ${value}`);
}

inputRange.addEventListener("input", handleRange);
submit.addEventListener("click", handleSumbit);
