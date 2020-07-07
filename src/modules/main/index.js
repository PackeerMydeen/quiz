import React, { useState } from 'react'
import { questionBook } from '../../utils/questionBook'
import Card from '../../components/Card'
import './index.scss'
import Button from '../../components/Button'

export default function Main() {
    const [quiz, setQuiz] = useState(questionBook)
    const [errors, setError] = useState([])

    const onChange = (index, e) => {
        let quizTemp = [...quiz]
        quizTemp[index].selected = e.target.value
        setQuiz(quizTemp)
    }
    const submit = () => {
        if (validate()) {
            console.log('s')
        }

    }
    const validate = () => {
        let notAnswered = []
        quiz.forEach((item, index) => {
            if (item.selected === '') {
                notAnswered.push(index)
            }
        })
        setError(notAnswered)
        return notAnswered.length === 0 ? true : false
    }
    const clear = () => {
        let quizTemp = quiz.map(item => {
            return (
                { ...item, selected: '' }
            )
        })

        setQuiz(quizTemp)
        setError([])
    }
    return (
        <div className='main-wrapper'>

            {quiz.map((item, index) => {
                return (
                    <div className='quiz-section' key={index}>
                        <Card quiz={item} index={index} onChange={onChange} errors={errors} />
                    </div>
                )
            })}

            <div><Button onClick={submit}>Submit</Button></div>
            <div><Button onClick={clear}>Clear</Button></div>
        </div>
    )
}
