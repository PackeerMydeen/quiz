import React from 'react'
import './index.scss'

export default function Dropdown({ value, options, index, onChange }) {
    return (
        <select value={value} className='dropdown-wrapper' onChange={e => onChange(index, e)}>
            <option value="">Select an Option</option>
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    )
}
