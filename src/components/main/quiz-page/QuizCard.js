import { CheckIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import "./quiz-card.css";

function Questions ({option,correctAnswer}) {
    const choose = 'choose';
    const [bool,setBool] = useState([]);
    const randomID = Math.random()*100+1;

    function handleQuizAnswer () {
        const compare = correctAnswer === option ? true : false;
        setBool(compare)
    }


    return(
        <div className={`border border-2 rounded-md ${bool === true && 'border-green-600'} ${bool || 'border-red-600'}`}>
            <div className='p-5 flex justify-center items-center'>
            <div><input onClick={handleQuizAnswer} value={correctAnswer} className='mr-2' name={choose} id={randomID} type="radio"/></div>
            <div>
            <label onClick={handleQuizAnswer} className='cursor-pointer font-mona text-pink-600' name={choose} htmlFor={randomID}>{option}</label>
            </div>
            </div>
        </div>
    )
}

const QuizCard = ({data,index}) => {
    const {correctAnswer,question,options} = data;
    // console.table(options)
    return (
        <div className='shadow bg-lightWhite2 mx-auto my-5  py-5 w-1/2'>
            <div className='mx-10 text-center'>
            <p className='font-mona'>Quiz: {index} {question}</p>
            <div className="mt-10 pb-10 grid gap-10 grid-cols-2">
                {
                   options.map((option,idx) =>  <Questions key={idx} correctAnswer={correctAnswer} option={option}></Questions>)
                }
            </div>
            </div>
        </div>
    );
};

export default QuizCard;