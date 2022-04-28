import { useState } from 'react'
import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterCountry from './components/FilterCountry'
import FilterLanguage from './components/FilterLanguage'
import SearchButton from './components/SearchButton'
import Articles from './components/Articles'
import "./css/App.css"

const App = (props) => {
  const [keyword, setKeyword] = useState('Ukraine war');
  const [country, setCountry] = useState('CA');
  const [language, setLanguage] = useState('en');
  //const [numSearches, setNumSearches] = useState(0);
  const [items, setItems] = useState();

  var RSS_URL = `http://localhost:8010/proxy/rss/search?q=`;
  var RSS_Top_Stories_URL = 'http://localhost:8010/proxy/rss';

  // If no searches were made, display the headlines
  if (!items) {
    fetch(RSS_Top_Stories_URL, {mode: 'cors'})  // axios might be better than fetch
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      console.log(data);
      //items = data.getElementsByTagName("item");
      setItems(data.getElementsByTagName("item"));
      //console.log(items[0]);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
 

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
      //items = data.getElementsByTagName("item");
      //setNumSearches(numSearches + 1);
      setItems(data.getElementsByTagName("item"))
      console.log(items[0]);
      
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
    console.log("Country Selected:", event.label);
    setCountry(event.value);
  }

  const handleLanguageChange = (event) => {
    console.log("Language Selected:", event.label);
    setLanguage(event.value);
  }

  if (!items) { // Temporary. Once Top Stories is set up, this return statement can be removed.
    console.log("Items is empty");
    return (
      <div>
        <Header />
        <SearchBar value={keyword} onChange={handleKeywordChange}/>
        <FilterCountry  onChange={handleCountryChange}/>
        <FilterLanguage onChange={handleLanguageChange}/>
        <SearchButton onClick={search} type="button" />
      </div>
    )
  }

  console.log("Items is not empty");
  
  return (
    <div>
      <Header />
      <div className='search-section'>
        <span className='component-search-bar'>
          <SearchBar  value={keyword} onChange={handleKeywordChange}/>
        </span>
        <span className='component-filter-country'>
          <FilterCountry  onChange={handleCountryChange}/>
        </span>
        <span className='component-filter-language'>
          <FilterLanguage  onChange={handleLanguageChange}/>
        </span>
      </div>
      
      <SearchButton onClick={search} type="button" />
      <Articles items={items} />
    </div>
  )

}

export default App 