document.addEventListener("DOMContentLoaded", () => {
  const updates = [
    {
      symbol: "RELIANCE",
      price: "₹2,300",
      change: "+0.75%",
      time: "2025-04-07 10:30 AM"
    },
    {
      symbol: "TCS",
      price: "₹3,150",
      change: "-0.20%",
      time: "2025-04-07 10:32 AM"
    }
  ];

  const container = document.getElementById("updates-container");
  container.innerHTML = "";

  updates.forEach(update => {
    const item = document.createElement("div");
    item.className = "update-item";
    item.innerHTML = `
      <strong>${update.symbol}</strong><br>
      Price: ${update.price} <br>
      Change: ${update.change} <br>
      Time: ${update.time}
    `;
    container.appendChild(item);
  });
});
