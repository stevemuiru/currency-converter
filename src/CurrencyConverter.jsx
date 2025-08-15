import { useState, useEffect } from "react";

const rates = {
  USD: 1,
  EUR: 0.91,
  KES: 129.53,
  GBP: 0.78,
};

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [converted, setConverted] = useState("");

  // Automatically run conversion whenever inputs change
  useEffect(() => {
    if (amount !== "") {
      const result = (amount / rates[baseCurrency]) * rates[targetCurrency];
      setConverted(result.toFixed(2));
    } else {
      setConverted("");
    }
  }, [amount, baseCurrency, targetCurrency]);

  return (
    <div>
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />

      <select
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
      >
        {Object.keys(rates).map((currency) => (
          <option
            key={currency}
            value={currency}
            disabled={currency === targetCurrency}
          >
            {currency}
          </option>
        ))}
      </select>

      <select
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
      >
        {Object.keys(rates).map((currency) => (
          <option
            key={currency}
            value={currency}
            disabled={currency === baseCurrency}
          >
            {currency}
          </option>
        ))}
      </select>

      <h2>
        {amount && converted
          ? `${amount} ${baseCurrency} = ${converted} ${targetCurrency}`
          : "Enter an amount to convert"}
      </h2>
    </div>
  );
}
