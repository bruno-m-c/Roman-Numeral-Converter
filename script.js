const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romans = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

const checkUserInput = () => {
  const input = parseInt(number.value);

  if (isNaN(input)) { // Check first if the input is not a number
    output.innerText = "Please enter a valid number";
    return;
    } else if (input < 1) { // Check for negative values or zero
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
   } else if (input > 3999) { // Check if input exceeds the upper limit
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
    } else {
    output.innerText = decimalToRoman(input);
    number.value = "";
    return ;
  }
};

const decimalToRoman = (num) => {
  const result = [];
  
  for (let key in romans) {
    while (num >= romans[key]) {
      result.push(key);
      num -= romans[key];
    }
  }
  return result.join('');
};

convertBtn.addEventListener("click", checkUserInput);

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});