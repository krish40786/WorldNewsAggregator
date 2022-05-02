import React from 'react'

const PageButton = (props) => {
    return (
        <button id={props.id} onClick={props.onClick} type='button'>{props.id}</button>
    )
}

export default PageButton