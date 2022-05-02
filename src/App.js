import { useState } from 'react'
import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterCountry from './components/FilterCountry'
import FilterLanguage from './components/FilterLanguage'
import SearchButton from './components/SearchButton'
import Articles from './components/Articles'
import NumArticlesPreference from './components/NumArticlesPreference'
import Paging from './components/Paging'
import "./css/App.css"

const App = (props) => {
  const [keyword, setKeyword] = useState('Ukraine war');
  const [country, setCountry] = useState('CA');
  const [language, setLanguage] = useState('en');
  const [items, setItems] = useState();
  const [numArticlesPreferred, setNumArticlesPreferred] = useState(10);
  // const [page, setPage] = useState(1);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);  // State used to track which articles to display on the current page

  var RSS_URL = `http://localhost:8010/proxy/rss/search?q=`;
  var RSS_Top_Stories_URL = 'http://localhost:8010/proxy/rss';
 
  //var currentArticleIndex = 0;  

  // Top Stories Search functions
  const topStoriesSearch = (event) => {
    fetch(RSS_Top_Stories_URL, {mode: 'cors'})  // axios might be better than fetch
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      console.log(data);
      setItems(data.getElementsByTagName("item"));
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  // If no searches were made, display the headlines
  if (!items) {
    topStoriesSearch();
  }

  // Search function based on country and language
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
      setItems(data.getElementsByTagName("item"))
      console.log(items[0]);
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  // State change handlers
  const handleKeywordChange = (event) => {
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

  const handleNumArticlesPreferenceChange = (event) => {
    console.log("Number of Articles Displayed Selected:", event.label);
    setNumArticlesPreferred(event.value);
    setCurrentArticleIndex(0);  // Let the page go back to display the first articles
  }

  const handlePageChange = (event) => {
    console.log("Page Selected:", event.target.id);
    setCurrentArticleIndex(event.target.id * numArticlesPreferred);
  }

  // This is an extra return statement for the case where items is empty, in which case don't call the Articles module
  if (!items) {
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

  //console.log("Items is not empty");
  
  
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
      <NumArticlesPreference onChange={handleNumArticlesPreferenceChange} value={numArticlesPreferred}/>
      <Articles items={items} numArticlesPreferred={numArticlesPreferred} currentArticleIndex={currentArticleIndex}/>
      <Paging totalNumItems={items.length} numArticlesPreferred={numArticlesPreferred} onClick={handlePageChange}/>
    </div>
  )

}

export default App 