import React, {useEffect} from 'react';
require('dotenv').config()
const API_KEY = process.env.REACT_APP_API_KEY;
const API_ID = process.env.REACT_APP_API_ID;


function App() {

let fetchData = (API_ID, API_KEY) => {
  console.log('api id:', API_ID, 'api key:', API_KEY)
  fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
}

useEffect(() => {
  fetchData(API_ID, API_KEY);
},[])
  return (
    <div className="App">
    app
    </div>
  );
}

export default App;
