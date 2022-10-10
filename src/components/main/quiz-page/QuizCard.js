import React from 'react';
import "./quiz-card.css";

function Questions ({option,correctAnswer,idx}) {
    return(
        <div className='border border-2'>
            <div className='p-5 flex justify-between items-center'>
            <input value={correctAnswer} id={idx} type="radio"/>
            <label className='font-mona' htmlFor={idx}>{option}</label>
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
                   options.map((option,idx) =>  <Questions id={idx} key={idx} correctAnswer={correctAnswer} option={option}></Questions>)
                }
            </div>
            </div>
        </div>
    );
};

export default QuizCard;