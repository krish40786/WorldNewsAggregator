import React from 'react'
import Select from 'react-select'

const FilterCountry = (props) => {
    const country_options = [
        { value: 'CA', label: 'Canada'},
        { value: 'IN', label: 'India'},
        { value: 'CN', label: 'China'},
        { value: 'UA', label: 'Ukraine'}
    ]

    return (
        <Select /*isMulti={true}*/ options={country_options} onChange={props.onChange}/>
    )
}



export default FilterCountry