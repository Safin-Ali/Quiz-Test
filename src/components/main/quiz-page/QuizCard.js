import React from 'react';

const QuizCard = ({data}) => {
    const {correctAnswer,id,question,options} = data;
    return (
        <div className='shadow mx-auto w-1/2'>
            <div className='mx-10 text-center'>
            <p>{question}</p>
            </div>
        </div>
    );
};

export default QuizCard;