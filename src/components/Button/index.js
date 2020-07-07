import React from 'react'
import './index.scss'

export default function Button(props) {
    return (
        <button onClick={props.onClick} className='button-wrapper'>
            {props.children}
        </button>
    )
}
