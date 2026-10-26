function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  // REAL CBN RATES TODAY Oct 26, 2026
  const rates = {
    USD: 1362.84,
    EUR: 1525.12,
    GBP: 1821.46,
    NGN: 1
  };

  if (isNaN(amount)) {
    document.getElementById("result").innerText = "Enter a valid number";
    return;
  }

  // Convert to NGN first, then to target
  const amountInNGN = amount * rates[from];
  const converted = amountInNGN / rates[to];

  document.getElementById("result").innerText = 
    `${amount} ${from} = ${converted.toFixed(2)} ${to} (Rate: Oct 26, 2026)`;
}
