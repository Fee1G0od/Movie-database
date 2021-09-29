import React, { useState } from 'react';

import axios from 'axios'

import Search from '../components/Search'
import Results from '../components/Results'
import Popup from '../components/Popup'


function MovieApp() {
  const [state, setState] = useState({
    searchState:"",
    results:[],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=cc4add10"

    const search = (e) => {
      if (e.key === "Enter"){
      axios(apiurl + "&s=" + state.searchState).then(({data}) => {
        let results = data.Search;
        setState(prevState =>{
          return { ...prevState, results: results }
        })
         });
      }
   }
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return{ ...prevState, searchState: s }
    });
  }

  const openPopup = id =>{
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);
      setState(prevState => {
        return{...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState =>{
      return{...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Movie Database
        </h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected}
         closePopup={closePopup} /> : false}
         
      </main>
    </div>
  );
}



export default MovieApp;
