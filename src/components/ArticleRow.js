import React from 'react'

const ArticlesRow = (props) => {
    return (
        <div>
            <span>props.title</span>
            <span>props.link</span>
            <span>props.description</span>
            <span>props.source_url</span>
        </div>
    )
}

export default ArticlesRow