window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    
    const loanAmount = document.getElementById('loan-amount');
    const term = document.getElementById("loan-years");
    const rate = document.getElementById("loan-rate");

    loanAmount.value="250000";
    term.value='25';
    rate.value='10';

    const values={
        amount: loanAmount.value,
        years: term.value,
        rate: rate.value,
    }
    
calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    
    const currentValues={
        amount: document.getElementById('loan-amount').value,
        years: document.getElementById('loan-years').value,
        rate: document.getElementById('loan-rate').value,
    }
    if(currentValues.years<=0 || currentValues.rate<=0){
        alert("Please enter a valid number and try again")
    }

    calculateMonthlyPayment(currentValues);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    const { amount, years, rate } = values;
    const i= parseFloat(rate)/100/12;
    const n= parseFloat(years)*12;
    const principal = parseFloat(amount);
    const monthlyPayment = ((principal * i) / (1 - Math.pow(1 + i, -n))).toFixed(2);
    updateMonthly(monthlyPayment);
    return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    const monthlyUI = document.getElementById('monthly-payment');
    monthlyUI.innerText=`\$ ${monthly}`;
}
