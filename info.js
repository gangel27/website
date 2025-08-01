const dataString = `[
  {
    "ID": "chess-ai",
    "Thumbnail": "./Images/chess_thumbnail.jpg",
    "Images": ["./Images/selfie.jpg", "./Images/epidemiology.png", "./Images/chess_thumbnail.jpg"],
    "Title": "Chess Game with AI",
    "Tags": ["JavaScript", "Raspberry Pi", "Voice Assistant"],
    "Intro": "Full Chess Application including AI, puzzles, and analysis board.",
    "Description": "<p>Built entirely in Python using Pygame, this object-oriented chess app supports full FIDE rules, including 50-move and repetition draws. Driven by my passion for chess, the project took several months and includes four core features:</p><ol><li><strong>Tutorial</strong> – A text-based introduction explaining piece movement and basic rules.</li><li><strong>Analysis Board</strong> – Play locally against a friend or yourself with board flipping and undo options.</li><li><strong>Puzzles</strong> – A JSON-based, easily expandable database of ~20 puzzles with varying difficulty and hints.</li><li><strong>AI Opponent</strong> – Play full games against an engine with adjustable difficulty. The AI uses minimax with alpha-beta pruning, move ordering, and transposition optimizations. The evaluation function is custom-built based on my own chess insights.</li></ol>"
  },
  {
    "ID": "digit-recog",
    "Thumbnail": "./Images/digit_recog.png",
    "Images": ["./Images/selfie.jpg", "./Images/epidemiology.png", "./Images/chess_thumbnail.jpg"],
    "Title": "Hand drawn number recogniser",
    "Tags": ["JavaScript", "Raspberry Pi", "Voice Assistant"],
    "Intro": "CNN digit recogniser",
    "Description": "<p>This project was my first introduction to TensorFlow and convolutional neural networks (CNNs). I trained a model on the MNIST dataset to recognize hand-drawn digits, then built a minimal Flask backend and a simple HTML5 Canvas-based frontend so users could draw digits live. The Flask server connects the canvas input to the trained model and returns predictions. The frontend is intentionally minimal, as the focus was on learning CNNs and backend integration.</p>"

  },
  {
    "ID": "prem-pred",
    "Thumbnail": "./Images/premier_thumbnail.png",
    "Images": ["./Images/selfie.jpg", "./Images/epidemiology.png", "./Images/chess_thumbnail.jpg"],
    "Title": "Premier League results predictor",
    "Tags": ["JavaScript", "Raspberry Pi", "Voice Assistant"],
    "Intro": "Data analytics into Premier League data, and results",
    "Description": "<p>This project initially started with me web scraping (using BeautifulSoup) the data from <a href='https://fbref.com' target='_blank'>fbref</a>. This included all end-of-season league tables and each team's info, such as home goals, away goals, saves, etc. I then uploaded all this data into an SQL database for ease of access.</p><p>From here, I downloaded all the individual matches from the 23/24 season and their match stats, including expected stats, as well as downloading all the 24/25 fixtures and results (I was developing this during the season). I then learnt about and compared how multiple different scikit-learn models could be used, training on the fixture results data to predict the rest of the results of the 24/25 season.</p><p>My model, for simplicity, predicted the expected goal difference — so the scorelines 2–1 and 1–0 are equivalent to my model. This is because my goal was to simply predict the probability of the outcome of the match. Once I had my completed model, I simulated the rest of the season’s fixtures stochastically (using the predicted probability of each outcome), allowing me to conclude the expected probabilities of each of the teams winning the league or getting relegated.</p>"

  },
  {
    "ID": "weather-stat",
    "Thumbnail": "./Images/weather_station.png",
    "Images": ["./Images/selfie.jpg", "./Images/epidemiology.png", "./Images/chess_thumbnail.jpg"],
    "Title": "Live Weather Station",
    "Tags": ["JavaScript", "Raspberry Pi", "Voice Assistant"],
    "Intro": "A live updating website conncted to a raspberry pi recording, and storing local weather conditions.",
    "Description": "<p>This project was built and run almost entirely on a Raspberry Pi 4. My old school, <a href='https://sandringham.herts.sch.uk/' target='_blank'>Sandringham</a>, had some unused sensors lying around — including temperature, wind, rain, humidity, and pressure sensors — which I connected to the Pi to begin recording environmental data.</p><p>The data was stored in a SQL database on the backend, accessible via a Python Flask server. This server powered a website I built, which displayed the current weather and included an interactive interface for viewing historical sensor data.</p>"

  },
  {
    "ID": "epidemiology",
    "Thumbnail": "./Images/epidemiology.png",
    "Images": ["./Images/selfie.jpg", "./Images/epidemiology.png", "./Images/chess_thumbnail.jpg"],
    "Title": "Epidemiology modelling",
    "Tags": ["JavaScript", "Raspberry Pi", "Voice Assistant"],
    "Intro": "Intro TBC",
    "Description": "<p>This was a mathematically focused project exploring the modelling of disease spread using the SIR model and its extensions. It included both stochastic and deterministic approaches, along with investigations into how changes in input parameters affect the likelihood and scale of an outbreak.</p><p>I also implemented models for social distancing and vaccination, triggering these interventions at certain infection thresholds to observe theirimpact on the system’s dynamics"
  },
  {
    "ID": "ai-assist",
    "Thumbnail": "./Images/ai_assist.png",
    "Images": ["./Images/selfie.jpg", "./Images/epidemiology.png", "./Images/chess_thumbnail.jpg"],
    "Title": "Personal AI assistant",
    "Tags": ["JavaScript", "Raspberry Pi", "Voice Assistant"],
    "Intro": "Physical voice activated personal assistant.",
    "Description": "<p>This project was built at home using my own Raspberry Pi, connected to a speaker and microphone. Using Python, I developed a script that continuously listened for an activation command and responded accordingly.</p><p>Responses were generated using a large language model (LLM) API, but I also implemented keyword-based overrides to trigger specific actions — such as sending a message to my phone via a Telegram bot. Impressively, this worked even when the Pi and my phone were on different networks.</p>"

  }
]`;

const dataArray = JSON.parse(dataString);
const dataDict = Object.fromEntries(dataArray.map(item => [item.ID, item]));