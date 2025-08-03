const dataString = `[
  {
    "ID": "chess-ai",
    "Thumbnail": "./Images/chess_thumbnail.jpg",
    "Images": ["./Images/Chess/1.png", "./Images/Chess/2.png", "./Images/Chess/3.png", "./Images/Chess/4.png", "./Images/Chess/5.png", "./Images/Chess/6.png"],
    "Title": "Chess Game with AI",
    "Tags": ["Artificial Intelligence", "Minimax", "Python-Pygame", "Optimisation"],
    "Intro": "Full Chess Application including AI, puzzles, and analysis board.",
    "Description": "<p>Built entirely in Python using Pygame, this object-oriented chess app supports full FIDE rules, including 50-move and repetition draws. Driven by my passion for chess, the project took several months and includes four core features:</p><ol><li><strong>Tutorial</strong> – A text-based introduction explaining piece movement and basic rules.</li><li><strong>Analysis Board</strong> – Play locally against a friend or yourself with board flipping and undo options.</li><li><strong>Puzzles</strong> – A JSON-based, easily expandable database of ~20 puzzles with varying difficulty and hints.</li><li><strong>AI Opponent</strong> – Play full games against an engine with adjustable difficulty. The AI uses minimax with alpha-beta pruning, move ordering, and transposition optimizations. The evaluation function is custom-built based on my own chess insights.</li></ol>"
  },
  {
    "ID": "digit-recog",
    "Thumbnail": "./Images/digit_recog.png",
    "Images": ["./Images/Digit/1.png", "./Images/Digit/2.png", "./Images/Digit/3.png"],
    "Title": "Hand drawn number recogniser",
    "Tags": ["Convolutional Neural Network", "Tensorflow", "Python", "Server", "MNIST"],
    "Intro": "A live digit recognition app powered by a TensorFlow-trained neural network.",
    "Description": "<p>This project was my first dive into neural networks, where I trained a <em>convolutional neural network (CNN)</em> using <em>TensorFlow</em> on the MNIST dataset. The model learned to recognize hand-drawn digits with high accuracy through layered convolution and pooling operations. I built a minimal Flask backend and an HTML5 Canvas frontend that lets users draw digits live, which are then preprocessed and classified in real time by the model. The focus was on end-to-end integration of a neural network into a working web app.</p>"
  },
  {
    "ID": "prem-pred",
    "Thumbnail": "./Images/premier_thumbnail.png",
    "Images": ["./Images/Premier/1.png", "./Images/Premier/2.png", "./Images/Premier/3.png", "./Images/Premier/4.png", "./Images/Premier/5.png"],
    "Title": "Premier League results predictor",
    "Tags": ["Pandas", "SQL", "Ski-learn", "Data Analytics", "Data Visualisation"],
    "Intro": "Predicting football match outcomes using scraped data and machine learning simulations.",
    "Description": "<p>This project began by scraping data from <a style='color: #1a1a2e ' href='https://fbref.com' target='_blank'>fbref</a> using BeautifulSoup, including league tables and team stats like goals and saves. I stored everything in a SQL database for easy access. I then gathered match data from the 23/24 season (including expected goals) and the 24/25 fixtures and results. Using this data, I trained and compared several <code>scikit-learn</code> models to predict future match outcomes. The model estimated win probabilities by predicting expected goal differences, treating similar scorelines (e.g., 2–1 and 1–0) as equivalent. I then simulated the remaining fixtures stochastically to estimate each team's chances of winning the league or being relegated.</p>"

  },
  {
    "ID": "weather-stat",
    "Thumbnail": "./Images/weather_station.png",
    "Images": ["./Images/Weather/1.png", "./Images/Weather/2.png", "./Images/Weather/3.png", "./Images/Weather/4.png"],
    "Title": "Live Weather Station",
    "Tags": ["Server", "Raspberry Pi", "Full-stack Development"],
    "Intro": "A live updating website conncted to a raspberry pi recording, and storing local weather conditions.",
    "Description": "<p>This project was built and run almost entirely on a Raspberry Pi 4. My old school, <a style='color: #1a1a2e' href='https://sandringham.herts.sch.uk/' target='_blank'>Sandringham</a>, had some unused sensors lying around — including temperature, wind, rain, humidity, and pressure sensors — which I connected to the Pi to begin recording environmental data.</p><p>The data was stored in a SQL database on the backend, accessible via a Python Flask server. This server powered a website I built, which displayed the current weather and included an interactive interface for viewing historical sensor data.</p>"

  },
  {
    "ID": "epidemiology",
    "Thumbnail": "./Images/epidemiology.png",
    "Images": ["./Images/epidemiology/1.png", "./Images/epidemiology/2.png", "./Images/epidemiology/3.png", "./Images/epidemiology/4.png"],
    "Title": "Epidemiology modelling",
    "Tags": ["Mathematical Modelling", "Python", "Stochastic simulation"],
    "Intro": "Simulating disease spread with SIR models and testing the impact of social interventions.",
    "Description": "<p>This project explored the mathematical modelling of disease spread using both the SIR and SIS models. I investigated the role of input parameters in influencing outbreak probabilities and epidemic size, using both stochastic simulations and deterministic equations. The project also involved modelling social interventions such as vaccination and social distancing, which were triggered dynamically at specific infection thresholds to analyse their effect on the system’s long-term behaviour and stability.</p>"



  },
  {
    "ID": "ai-assist",
    "Thumbnail": "./Images/ai_assist.png",
    "Images": ["./Images/selfie.jpg", "./Images/epidemiology.png", "./Images/chess_thumbnail.jpg"],
    "Title": "Personal AI assistant",
    "Tags": ["LLM", "Raspberry Pi", "Hardware", "Python"],
    "Intro": "Voice-controlled Raspberry Pi assistant with LLM integration.",
    "Description": "<p>This project was built at home using my own Raspberry Pi, connected to a speaker and microphone. Using Python, I developed a script that continuously listened for an activation command and responded accordingly.</p><p>Responses were generated using a large language model (LLM) API, but I also implemented keyword-based overrides to trigger specific actions — such as sending a message to my phone via a Telegram bot. Impressively, this worked even when the Pi and my phone were on different networks.</p>"

  }
]`;

const dataArray = JSON.parse(dataString);
const dataDict = Object.fromEntries(dataArray.map(item => [item.ID, item]));