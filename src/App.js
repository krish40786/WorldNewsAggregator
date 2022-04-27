import { useState } from 'react'
import React from 'react';

const App = (props) => {
  const [keyword, setKeyword] = useState('Ukraine war');
  const [country, setCountry] = useState('CA');
  const [language, setLanguage] = useState('en');

  var RSS_URL = `http://localhost:8010/proxy/rss/search?q=`;

  const search = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    RSS_URL += keyword + '&hl=' + language + '&gl=' + country + '&ceid=' + country + ':' + language;
    console.log("RSS_URL:", RSS_URL);
    fetch(RSS_URL, {mode: 'cors'})  // axios might be better than fetch
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const handleKeywordChange = (event) => {
    //console.log(event.target.value);
    setKeyword(event.target.value);
  }

  const handleCountryChange = (event) => {
    //console.log(event.target.value);
    setCountry(event.target.value);
  }

  const handleLanguageChange = (event) => {
    //console.log(event.target.value);
    setLanguage(event.target.value);
  }

  return (
    <div>
      <h1>World News Aggregator</h1>
      <form onSubmit={search}>
        keyword
        <input 
          value={keyword} 
          onChange={handleKeywordChange}
        />
        geoLocation
        <input 
          value={country} 
          onChange={handleCountryChange}
        />
        language
        <input 
          value={language} 
          onChange={handleLanguageChange}
        />
        <button type="submit">search</button>
      </form>
    </div>
  )

}

export default App 