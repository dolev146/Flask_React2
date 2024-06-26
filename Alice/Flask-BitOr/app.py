from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/api/data', methods=['GET'])
def get_data():
    # Here, you can add logic to retrieve or calculate the data you want to send.
    # For this example, we'll just return a simple dictionary.
    print("get_data")
    data = {"key": "value",
            "key2": "value2"}
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
