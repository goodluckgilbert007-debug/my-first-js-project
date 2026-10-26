async function convert() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value.toLowerCase();
  const to = document.getElementById("to").value.toLowerCase();
  const resultEl = document.getElementById("result");

  if (!amount) {
    resultEl.innerText = "Enter amount first";
    return;
  }

  resultEl.innerText = "Fetching live rate...";

  try {
    // CDN API - works with Proton VPN
    const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`);
    const data = await response.json();
    
    const rate = data[from][to];
    const converted = amount * rate;

    resultEl.innerText = `${amount.toUpperCase()} ${from.toUpperCase()} = ${converted.toFixed(2)} ${to.toUpperCase()} (LIVE)`;
  } catch (error) {
    // Fallback if offline
    resultEl.innerText = "Live API blocked, using real backup rates...";
    const rates = { usd: 1362.84, eur: 1525.12, gbp: 1821.46, ngn: 1 };
    const fromUpper = from.toUpperCase();
    const toUpper = to.toUpperCase();
    const ratesUpper = { USD: 1362.84, EUR: 1525.12, GBP: 1821.46, NGN: 1 };
    
    const amountInNGN = amount * ratesUpper[fromUpper];
    const converted = amountInNGN / ratesUpper[toUpper];
    
    resultEl.innerText = `${amount} ${fromUpper} = ${converted.toFixed(2)} ${toUpper} (Real rate Oct 26)`;
  }
}
