import { EyeIcon } from '@heroicons/react/24/solid';
import React, {  useState } from 'react';
import "./quiz-card.css";
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Questions ({option,correctAnswer}) {
    const choose = 'choose';
    const randomID = Math.random()*100+1;
    function handleQuizAnswer () {
        const compare = correctAnswer === option ? true : false;
    }
    
    return(
        <div className={`border border-2 quiz-sec rounded-md `}>
            <div className='p-5 flex justify-center items-center h-full'>
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
    const [showAnsBool,setShowAnsBool] = useState(false)
    
    function showAns () {
        const getAns = options.find(ot => correctAnswer === ot);
        setShowAnsBool(!showAnsBool)
    }

    return (
        <div className='shadow bg-lightWhite2 mx-auto my-5  py-5 w-1/2'>
            <div className='mx-10 flex justify-center items-center'>
                <p className='font-mona'>Quiz: {index} {question}</p>
                <div>
                <EyeIcon onClick={showAns} className='cursor-pointer w-8'></EyeIcon>
                </div>
            </div>

            <div>
            <p className={`text-center my-5 ${showAnsBool ? 'hidden' : 'block'}`}>Answer: <strong>{correctAnswer}</strong></p>
            </div>
            
            <div className="mt-10 mx-10 pb-10 grid gap-10 grid-cols-2">
                {
                   options.map((option,idx) =>  <Questions key={idx} correctAnswer={correctAnswer} option={option}></Questions>)
                }
            </div>
        </div>
    );
};

export default QuizCard;