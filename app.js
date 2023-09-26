const pressBtn = document.querySelector("#number-button");
const upgradeBtn = document.querySelector("#upgrade-button");
const upgradeNum = document.querySelector(".press-btn");

console.log(pressBtn, upgradeBtn, upgradeNum);

let numPress = 1;
let numUpgrade = 10;

pressBtn.addEventListener("click", function () {
  const number = pressBtn.textContent;
  pressBtn.textContent = Number(number) + numPress;
});

upgradeBtn.addEventListener("click", function () {
  const numOne = pressBtn.textContent;
  const numTwo = upgradeNum.textContent;
  if (Number(numOne) < Number(numTwo)) {
    return;
  } else if (Number(numOne) >= Number(numTwo)) {
    const num = pressBtn.textContent;
    pressBtn.textContent = Number(num) - numUpgrade;
    updateNum();
    upgradeNum.textContent = numUpgrade;
  }
});

const updateNum = function () {
  numPress = numPress * 2;
  numUpgrade = numUpgrade * 2;
};


//iLi's js//
const sunIcon = document.getElementById("sun-icon");

upgradeBtn.addEventListener('click', () => {
    sunIcon.style.fill = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    //Random Hex Color Code Generator//
})