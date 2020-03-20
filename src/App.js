import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Search from './components/Search.js';

function App() {
  const [message, newMessage] = useState('');
  const [images, setImages] = useState([]);

  const searchApi = () =>{
    const word = message;
    const url = "https://pixabay.com/api/?key=15667267-5856fe192282cadf6df5a018e&q=" + word +"&image_type=photo&pretty=true";
  
    //Search api
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.hits);
        setImages(images.concat(data.hits));
        console.log(images);
        console.log("Total : " + images.length);
      });
  }

  //Function for show text sending for the component of search
  const searchText = (text) => {
    //console.log("query : " + text); //Show message
    newMessage(text);
    searchApi();
  }

  return (
    <div className="App container">
      <div className="jumbotron">
        <p className="lead text-center">Search images</p>
        
        <Search 
          query={searchText}  //Call function
        />
      </div>
      {message}
    </div>    
  );
}

export default App;
