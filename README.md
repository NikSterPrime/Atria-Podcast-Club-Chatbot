🎙️ Podcast Chatbot
A simple chatbot web app that recommends podcasts based on user queries. Built with React.js on the frontend and Express.js for the backend.

🚀 Features
🔍 Users can ask questions about podcasts.

🎧 Returns a list of matching podcasts based on tags.

🔗 Shows Spotify and YouTube links as buttons.

⚠️ NLP and podcast preview features are not yet implemented.

🔧 Technologies Used
Frontend: React.js, HTML/CSS

Backend: Node.js, Express

Data Format: JSON (with title, tags, URLs)

🧠 How It Works
The user types a query.

The React frontend sends it to the backend (/recommend endpoint).

The backend checks for matching tags in podcasts.json.

Matching podcast data is returned and displayed with clickable buttons.

📌 To Do
 Add NLP support using spaCy or similar tools

 Embed podcast previews

 Improve UI/UX styling

 Add search suggestions or autocomplete

