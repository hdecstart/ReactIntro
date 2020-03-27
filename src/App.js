import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Search from './components/Search.js';
import Response from './components/Response.js';

function App() {
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(true);
  /*
    Option #1
    I have problem with the async of data, (the update not is immediately). But this case use {useEffect}
  */
  const searchApi = () =>{
    const pag = page;
    const word = message;
    const url = "https://pixabay.com/api/?key=15667267-5856fe192282cadf6df5a018e&q=" + word +"&image_type=photo&page="+pag+"&pretty=true";
    //Search api
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setImages(data.hits);
        console.log('Response API');
      });
  }

  /*
    Option #2
    Trigger action later load render, useEffect have update immdediately and optimization for request
  
 useEffect(()=> {    
    async function doRequest(){
      console.log("Entro");
      const url = "https://pixabay.com/api/?key=15667267-5856fe192282cadf6df5a018e&q=" + message +"&image_type=photo&pretty=true";
      const response = await fetch(url);
      const data = await response.json();
      setImages(data.hits);
    }
    doRequest(); // Call function
  },[message]);
*/

  function scroll(){
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth','start');
  }

  const nextPage = () =>  {
    //1. Get state with number of page
    let pag = page;
    //2. Add +1 to page
    pag +=1;
    //3. Set state page
    setPage(pag);
    scroll();
    console.log("Pag now : " + pag);
  }

  const previousPage = () =>  {
    //1. Get state with number of page
    let pag = page;
    //2. Discount -1 to page
    if ( pag !== 1 )
      pag -=1;
    //3. Set state page
    setPage(pag);
    scroll();
    console.log("Pag now : " + pag);
  }

  async function doRequest(){
    if ( start === false ){ //Control for not request first load
      console.log("Call Api effect : " + page);
      const pag = page;
      const word = message;
      const url = "https://pixabay.com/api/?key=15667267-5856fe192282cadf6df5a018e&q=" + word +"&image_type=photo&page="+pag+"&pretty=true";
      const response = await fetch(url);
      const data = await response.json();
      setImages(data.hits);
    }
    console.log("Set start");
    setStart(false);
  }

  //Then update value {page}, trigger this action
  useEffect(()=>{
    /*Begin 1
    if ( start === false ){ //Control for not request first load
      console.log("Call Api effect : " + page);
      searchApi();
    }
    console.log("Set start");
    setStart(false);
    end 1 */

    doRequest(); //Call function
    // eslint-disable-next-line
  },[message, page]);

  return (
    <div className="App container">
      <div className="jumbotron">
        <p className="lead text-center">Search images</p>
        
        <Search 
          //query={searchApi}  //Call function
          query={(text) => setMessage(text)}  //Set text, recive data of input
        />
      </div>
      <Response 
        dataImages={images}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>    
  );
}

export default App;
