import React from 'react'

const SearchButton = (props) => {
    return(
        <button onClick={props.onClick} type={props.type}>search</button>
    );

}

export default SearchButton