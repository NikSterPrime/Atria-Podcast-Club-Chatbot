from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# Load podcast data from the JSON file
with open('podcasts.json', 'r') as f:
    podcast_data = json.load(f)

@app.route('/recommend', methods=['POST'])
def recommend():
    query = request.json.get("query", "").lower()
    results = []

    for item in podcast_data:
        title_match = query in item["title"].lower()
        tag_match = any(query in tag.lower() for tag in item.get("tags", []))
        if title_match or tag_match:
            results.append(item)

    return jsonify({"results": results})
if __name__ == '__main__':
    app.run(debug=True)
