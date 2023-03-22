import { useState } from "react";
import Select from 'react-select'

const optionsType = [
    { value: 'chair', label: 'Chair' },
    { value: 'desk', label: 'Desk' },
    { value: 'sofa', label: 'Sofa' },
    { value: 'table', label: 'Table'}
  ]

const FilterCards = () => {
    return (
        <Select options={optionsType}/>
    )

}

export default FilterCards;