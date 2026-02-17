from flask import Flask, jsonify

app = Flask(__name__)

# Mock database
products = [
    {"id": 1, "name": "Wireless Headphones", "price": 99.99, "description": "Noise-cancelling wireless headphones"},
    {"id": 2, "name": "Smart Watch", "price": 199.99, "description": "Fitness tracking smartwatch"},
    {"id": 3, "name": "Bluetooth Speaker", "price": 79.99, "description": "Portable waterproof speaker"}
]

@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)