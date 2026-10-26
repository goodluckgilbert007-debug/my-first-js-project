// Simple rates (approximate)
const rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  NGN: 1600
};

function convert() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  
  // Convert to USD first, then to target
  const amountInUSD = amount / rates[from];
  const converted = amountInUSD * rates[to];
  
  document.getElementById("result").innerText = 
    `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
