const stocks = [
  { name: "Stock A", price: 123.45, color: "linear-gradient(135deg, #3b82f6, #60a5fa)", icon: "📈" },
  { name: "Stock B", price: 98.76, color: "linear-gradient(135deg, #ec4899, #f472b6)", icon: "📉" },
  { name: "Stock C", price: 110.10, color: "linear-gradient(135deg, #10b981, #34d399)", icon: "📊" },
  { name: "Stock D", price: 150.67, color: "linear-gradient(135deg, #f59e0b, #fbbf24)", icon: "💰" },
  { name: "Stock E", price: 89.34, color: "linear-gradient(135deg, #8b5cf6, #a78bfa)", icon: "🪙" }
];

function loadStockData() {
  const container = document.getElementById("stockContainer");
  container.innerHTML = ""; // clear existing
  stocks.forEach(stock => {
    const card = document.createElement("div");
    card.className = "stock-card";
    card.style.background = stock.color;
    card.innerHTML = `
      <div class="stock-icon">${stock.icon}</div>
      <div class="stock-name">${stock.name}</div>
      <div class="stock-price">$${stock.price.toFixed(2)}</div>
    `;
    container.appendChild(card);
  });
}
