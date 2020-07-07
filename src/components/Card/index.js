import React from 'react'
import './index.scss'
import Dropdown from '../Dropdown'

export default function Card(props) {
    const {quiz,errors}=props
    return (
        <div className='card-wrapper' style={{borderColor:errors.includes(props.index)?'red':'grey'}}>
            <div className='questions-section'>{quiz.question}</div>
            <div className='answer-section'><Dropdown value={quiz.selected} options={quiz.options} onChange={props.onChange} index={props.index}/></div>
        </div>
    )
}
