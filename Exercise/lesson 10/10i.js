let calculation =localStorage.getItem('calculation')||'';
displayCalculations();
function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  displayCalculations();
}
function displayCalculations(){
  document.querySelector('.js-calculation').innerHTML = calculation;
}