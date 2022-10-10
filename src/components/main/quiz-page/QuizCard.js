import React from 'react';

const QuizCard = ({data,index}) => {
    const {correctAnswer,id,question,options} = data;
    // console.table(options)
    return (
        <div className='shadow mx-auto my-5 w-1/2'>
            <div className='mx-10 text-center'>
            <p>Quiz: {index} {question}</p>
            </div>
        </div>
    );
};

export default QuizCard;