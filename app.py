from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from datetime import datetime

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route("/")
def home():
    return jsonify({
        "message": "StockExchangerIN Backend is live!",
        "time": str(datetime.now())
    })

@app.route("/stock", methods=["GET"])
def get_stock_data():
    company_name = request.args.get("name", "reliance")  # default is reliance

    url = f"https://livemint-api.p.rapidapi.com/stock?name={company_name}"
    headers = {
        "X-RapidAPI-Key": "683b2322ebmshbce5b9fc36ee69bp1eda52jsnfa395bff5fcf",
        "X-RapidAPI-Host": "livemint-api.p.rapidapi.com"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Failed to fetch data", "status": response.status_code})

if __name__ == "__main__":
    app.run(debug=True)
