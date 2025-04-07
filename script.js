document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("updates-container");
  container.innerHTML = "Loading live stock data...";
  
  // Replace the URL below with your deployed Flask backend URL
  const apiURL = "https://your-flask-app.render.com/stock?name=reliance";
  
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      container.innerHTML = "";  // Clear loading text

      // Here we assume that the API response contains key details.
      // Adjust the code based on the actual API response structure.
      const updateDiv = document.createElement("div");
      updateDiv.className = "update-item";

      // Example: if your API returns a structure with symbol, price, and analystView
      updateDiv.innerHTML = `
        <strong>Symbol: ${data.symbol || "N/A"}</strong><br>
        Price: ${data.price || "N/A"}<br>
        Analyst View: ${data.analystView ? data.analystView.join(", ") : "N/A"}<br>
        Updated: ${new Date().toLocaleString()}
      `;

      container.appendChild(updateDiv);
    })
    .catch(error => {
      console.error("Error fetching live data:", error);
      container.innerHTML = "Failed to load live stock data.";
    });
});
