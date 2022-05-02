import React from 'react'

const SearchBar = (props) => {
    return(
        <input value={props.value} onChange={props.onChange} />
    );

}

export default SearchBar