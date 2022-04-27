import { useState } from 'react'
import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterCountry from './components/FilterCountry'
import FilterLanguage from './components/FilterLanguage'
import SearchButton from './components/SearchButton'
import Articles from './components/Articles'

const App = (props) => {
  const [keyword, setKeyword] = useState('Ukraine war');
  const [country, setCountry] = useState('CA');
  const [language, setLanguage] = useState('en');
  const [numSearches, setNumSearches] = useState(0);

  var RSS_URL = `http://localhost:8010/proxy/rss/search?q=`;
  var items;

  const search = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    RSS_URL += keyword + '&hl=' + language + '&gl=' + country + '&ceid=' + country + ':' + language;
    console.log("RSS_URL Generated:", RSS_URL);
    fetch(RSS_URL, {mode: 'cors'})  // axios might be better than fetch
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      console.log(data);
      items = data.querySelectorAll("item");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    setNumSearches(numSearches + 1);
  }

  const handleKeywordChange = (event) => {
    //console.log(event.target.value);
    setKeyword(event.target.value);
  }

  const handleCountryChange = (event) => {
    console.log("Country Selected:", event.label);
    setCountry(event.value);
  }

  const handleLanguageChange = (event) => {
    console.log("Language Selected:", event.label);
    setLanguage(event.value);
  }


  return (
    <div>
      <Header />
      <SearchBar value={keyword} onChange={handleKeywordChange}/>
      <FilterCountry  onChange={handleCountryChange}/>
      <FilterLanguage onChange={handleLanguageChange}/>
      <SearchButton onClick={search} type="button" />
      
    </div>
  )
  //<Articles items={items} />

}

export default App 