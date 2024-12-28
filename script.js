function calculateMaturityAmount(){

    //get input values from the form elements

    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // perform the calculation

    const MaturityAmount = (principle * interestRate * tenure)/100;

    document.getElementById('result').innerText = `Maturity Amount: ${MaturityAmount.toFixed(2)}`;
}


document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);