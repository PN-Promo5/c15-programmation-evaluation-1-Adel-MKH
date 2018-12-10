//Exercice 1

//Screen 1
let container = document.createElement("form")
document.body.appendChild(container)
container.setAttribute("action", "#")
container.setAttribute("method", "post")

//First Name
let firstName = document.createElement("label");
container.appendChild(firstName);
firstName.textContent = "Quel est votre prénom ?";
firstName.setAttribute("for", "first");
container.appendChild(document.createElement("br"));

let first = document.createElement("input");
container.appendChild(first);
first.setAttribute("type", "text");
first.setAttribute("name", "first");
first.setAttribute("id", "first");
first.setAttribute("required");
container.appendChild(document.createElement("br"));

//Family Name
let familyName = document.createElement("label");
container.appendChild(familyName);
familyName.textContent = "Quel est votre nom ?";
familyName.setAttribute("for", "family");
container.appendChild(document.createElement("br"));

let family = document.createElement("input");
container.appendChild(family);
family.setAttribute("type", "text");
family.setAttribute("name", "family");
family.setAttribute("id", "family");
family.setAttribute("required");
container.appendChild(document.createElement("br"));

//Validate
let validate = document.createElement("input");
container.appendChild(validate);
validate.setAttribute("type", "submit");
validate.setAttribute("name", "validate");
validate.setAttribute("id", "OK");

validate.addEventListener("click", messageError, false);

let missed = document.createElement("p");
missed.textContent = "Veuillez remplir les informations";
missed.style.color = "red";

//Error
function messageError() {
  event.preventDefault()
  if (first.value == null || first.value == "" || family.value == null || family.value == "") {
    container.appendChild(missed)
  } else {
    container1_2.style.display = "block";
    container.style.display = "none";
  }
}

//Screen 2
let container2 = document.createElement("div");
document.body.appendChild(container2);
container1_2.style.display = "none";

let message = document.createElement("p");
container1_2.appendChild(message);
message.textContent = "Bonjour" + first.value + family.value + "!";

//Exercice 2

let container2 = document.createElement("form")
document.body.appendChild(container2)
container2.setAttribute("action", "#")
container2.setAttribute("method", "post")

//Gross Monthl Salary
let grossMonthlSalaryName = document.createElement("label");
container2.appendChild(grossMonthlSalaryName);
grossMonthlSalaryName.textContent = "Salaire mensuel brut";
grossMonthlSalaryName.setAttribute("for", "grossMonthlSalary");
container2.appendChild(document.createElement("br"));

let grossMonthlSalary = document.createElement("input");
container2.appendChild(grossMonthlSalary);
grossMonthlSalary.setAttribute("type", "number");
grossMonthlSalary.setAttribute("name", "grossMonthlSalary");
container2.appendChild(document.createElement("br"));

//Net Monthly Salary
let netMonthlySalaryName = document.createElement("label");
container2.appendChild(netMonthlySalaryName);
netMonthlySalaryName.textContent = "Salaire mensuel net";
netMonthlySalaryName.setAttribute("for", "netMonthlySalary");
container2.appendChild(document.createElement("br"));

let netMonthlySalary = document.createElement("input");
container2.appendChild(netMonthlySalary);
netMonthlySalary.setAttribute("type", "number");
netMonthlySalary.setAttribute("name", "netMonthlySalary");
container2.appendChild(document.createElement("br"));

//Gross Annual Salary
let grossAnnualSalaryName = document.createElement("label");
container2.appendChild(grossAnnualSalaryName);
grossAnnualSalaryName.textContent = "Salaire annuel brut";
grossAnnualSalaryName.setAttribute("for", "grossAnnualSalary");
container2.appendChild(document.createElement("br"));

let grossAnnualSalary = document.createElement("input");
container2.appendChild(grossAnnualSalary);
grossAnnualSalary.setAttribute("type", "number");
grossAnnualSalary.setAttribute("name", "grossAnnualSalary");
container2.appendChild(document.createElement("br"));

//Net Annual Salary
let netAnnualSalaryName = document.createElement("label");
container2.appendChild(netAnnualSalaryName);
netAnnualSalaryName.textContent = "Salaire annuel brut";
netAnnualSalaryName.setAttribute("for", "netAnnualSalary");
container2.appendChild(document.createElement("br"));

let netAnnualSalary = document.createElement("input");
container2.appendChild(netAnnualSalary);
netAnnualSalary.setAttribute("type", "number");
netAnnualSalary.setAttribute("name", "netAnnualSalary");
container2.appendChild(document.createElement("br"));

function () {

}

//Exercice 3

console.log("Exercice 3");

var testTAB = [1, 2, 3, 4, 5, 6, 3, 5]; //sequence

function isEven(n) {
  return n % 2 == 0;
}

function evenOrOdd(displayArray) {
  var i = 0;
  var elementCurrent;
  while (i < displayArray.length) {
    elementCurrent = displayArray[i];
    i = i + 1;
    if (isEven(elementCurrent)) {
      console.log(elementCurrent);
    }
  }
}
evenOrOdd(testTAB);

//Exercice 4
console.log("Exercice 4");

var stringArray = ['MAIS', 'ALORS', 'OU', 'AVEC', 'ET'];
var conjunction = ['MAIS', 'OU', 'ET', 'DONC', 'OR', 'NI', 'CAR'];



function conjunctionOfCoordinations(displayArray) {
  var i = 0;
  var elementCurrent;
  while (i < displayArray.length) {
    elementCurrent = displayArray[i];
    i = i + 1;
    if (elementCurrent = conjunction) {
      console.log(elementCurrent);
    }
  }
}
conjunctionOfCoordinations(stringArray)

//Exercice 5
console.log("Exercice 5");

function randomNum(min, max) {
  var n = [];
  var i = 0;
  while (i < 128) {
    i = i + 1
    n.push(Math.floor(Math.random() * max) + min);
  }
  return n;
}
randomNum(0, 100)
