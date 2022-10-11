import React, {  useState } from 'react';
import "./quiz-card.css";
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';

const customId = "custom-id-yes";

function Questions ({option,correctAnswer}) {
    const choose = 'choose';
    const randomID = Math.random()*100+1;
    function handleQuizAnswer () {
        if(correctAnswer === option){
            toast.success('Right Answer', {
                position: toast.POSITION.TOP_CENTER,
                toastId: customId
            });
        }
        else{
            toast.error('Wrong Answer', {
                position: toast.POSITION.TOP_CENTER,
                toastId: customId
            });
        }
    }
    
    return(
        <div className={'border-2 quiz-sec rounded-md'}>
            <div className='p-5 flex justify-center items-center h-full'>
            <div><input onClick={handleQuizAnswer} value={correctAnswer} className='mr-2' name={choose} id={randomID} type="radio"/></div>
            <div>
            <label onClick={handleQuizAnswer} className='cursor-pointer text-xs sm:text-base font-mona text-pink-600' name={choose} htmlFor={randomID}>{option}</label>
            </div>
            </div>
        </div>
    )
}

const QuizCard = ({data,index}) => {
    const {correctAnswer,question,options} = data;
    const [showAnsBool,setShowAnsBool] = useState(true)
    
    function showAns () {
        setShowAnsBool(!showAnsBool)
    }

    return (
        <div className='shadow bg-lightWhite2 mx-5 my-10 md:w-3/4 lg:w-1/2 md:mx-auto  py-5'>
            <div className='mx-5 flex flex-col lg:flex-row justify-center items-center'>
                <div>
                    <p className='font-mona'>Quiz: {index}</p>
                </div>
                <div>
                <p className='font-mona my-2 lg:my-0'>{question}</p>
                </div>
                <div>
                <FontAwesomeIcon onClick={showAns}  className='cursor-pointer w-10' icon={showAnsBool ? faEye : faEyeSlash}></FontAwesomeIcon>
                </div>
            </div>

            <div>
            <p className={`text-center my-5 ${showAnsBool ? 'hidden' : 'block'}`}>Answer: <strong>{correctAnswer}</strong></p>
            </div>
            
            <div className="mt-10 mx-10 pb-10 grid gap-10 grid-cols-1 md:grid-cols-2">
                {
                   options.map((option,idx) =>  <Questions key={idx} correctAnswer={correctAnswer} option={option}></Questions>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizCard;