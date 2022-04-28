import React from 'react'
import "./../css/ArticleRow.css"

const ArticlesRow = (props) => {
    return (
        <a href={props.link} className='component-article-row'>
            <div className='title'>{props.title}</div>
        </a>
    )
}

export default ArticlesRow