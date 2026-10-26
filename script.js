function convert() {
  var amount = document.getElementById("amount").value;
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var resultEl = document.getElementById("result");
  
  if (!amount) {
    resultEl.innerText = "Enter amount first";
    return;
  }
  
  var rates = { USD: 1362.84, EUR: 1525.12, GBP: 1821.46, NGN: 1 };
  var amountInNGN = amount * rates[from];
  var converted = amountInNGN / rates[to];
  
  resultEl.innerText = amount + " " + from + " = " + converted.toFixed(2) + " " + to;
}
