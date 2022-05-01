import React from 'react'
import Select from 'react-select'

const NumArticlesPreference = (props) => {
    const num_articles_options = [
        { value: '10', label: '10'},
        { value: '25', label: '25'},
        { value: '50', label: '50'},
        { value: '100', label: '100'}
    ]

    return (
        <Select options={num_articles_options} onChange={props.onChange}/>
    )
}



export default NumArticlesPreference