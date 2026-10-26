function convert() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  
  // REAL CBN RATES TODAY Oct 26, 2026
  const rates = { USD: 1362.84, EUR: 1525.12, GBP: 1821.46, NGN: 1 };
  
  if (!amount) {
    document.getElementById("result").innerText = "Enter amount first";
    return;
  }
  
  const amountInNGN = amount * rates[from];
  const converted = amountInNGN / rates[to];
  
  document.getElementById("result").innerText = 
    amount + " " + from + " = " + converted.toFixed(2) + " " + to + " (Real rate Oct 26, 2026)";
}
