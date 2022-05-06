import React from 'react'
import PageButton from './PageButton'

const Paging = (props) => {

    const pages = []
    console.log("Number of pages:", Math.ceil(props.totalNumItems / props.numArticlesPreferred));
    for (var i = 0; i < Math.ceil(props.totalNumItems / props.numArticlesPreferred); i++) {
        pages.push(
        <PageButton
            key = {i}
            onClick={props.onClick}
            id = {i}
        />
        );
    }

    return (
        <span>
            {pages}
        </span>
    );
}


export default Paging