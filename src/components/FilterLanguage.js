import React from 'react'
import Select from 'react-select'

const FilterLanguage = (props) => {
    const lang_options = [
        { value: 'en', label: 'English'},
        { value: 'hi', label: 'Hindi'},
        { value: 'zh', label: 'Chinese'},
        { value: 'uk', label: 'Ukrainian'}
    ]

    return (
        <Select /*isMulti={true}*/ options={lang_options} onChange={props.onChange}/>
    )
}



export default FilterLanguage