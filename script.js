function swapCurrencies() {
  const from = document.getElementById("from");
  const to = document.getElementById("to");
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
  convert(); // auto-convert after swap
}

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
    const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`);
    const data = await response.json();
    const rate = data[from][to];
    const converted = amount * rate;
    resultEl.innerText = `${amount} ${from.toUpperCase()} = ${converted.toFixed(2)} ${to.toUpperCase()} (LIVE)`;
  } catch (error) {
    resultEl.innerText = "Live API offline, try again...";
  }
}
