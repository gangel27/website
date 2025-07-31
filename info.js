const dataString = `[
  {
    "ID": "chess-ai",
    "Thumbnail": "./Images/chess_thumbnail.jpg",
    "Images": ["./Images/selfie.jpg", "./Images/epidemiology.png", "./Images/chess_thumbnail.jpg"],
    "Title": "Chess Game with AI",
    "Intro": "This is a short introduction to the game. ",
    "Description": "Lorem <b>ipsum dolor</b> sit amet..."
  },
  {
    "ID": "digit-recog",
    "Thumbnail": "./Images/digit_recog.png",
    "Images": ["./Images/digit_recog.png"],
    "Title": "Hand drawn number recogniser",
    "Intro": "This is a digit recogniser",
    "Description": "yasdfasdfasdf"
  },
  {
    "ID": "prem-pred",
    "Thumbnail": "./Images/premier_thumbnail.png",
    "Images": [],
    "Title": "Premier League results predictor",
    "Intro": "This is a premier predictor",
    "Description": "yasdfasdfasdf"
  },
  {
    "ID": "weather-stat",
    "Thumbnail": "./Images/weather_station.png",
    "Images": [],
    "Title": "Live Weather Station",
    "Intro": "This is a live weather station. Go sandringham!",
    "Description": "yasdfasdfasdf"
  },
  {
    "ID": "epidemiology",
    "Thumbnail": "./Images/epidemiology.png",
    "Images": [],
    "Title": "Epidemiology modelling",
    "Intro": "This was my uni first year project",
    "Description": "yasdfasdfasdf"
  },
  {
    "ID": "ai-assist",
    "Thumbnail": "./Images/ai_assist.png",
    "Images": [],
    "Title": "Personal AI assistant",
    "Intro": "This is my personal raspberry pi project.",
    "Description": "yasdfasdfasdf"
  }
]`;

const dataArray = JSON.parse(dataString);
const dataDict = Object.fromEntries(dataArray.map(item => [item.ID, item]));