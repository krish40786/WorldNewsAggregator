import React from 'react'

const SearchBar = (props) => {
    return(
        <input className='component-search-bar' value={props.value} onChange={props.onChange} />
    );

}

export default SearchBar