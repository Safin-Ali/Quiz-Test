import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import {ArrowSmallRightIcon } from '@heroicons/react/24/solid'

function QuizSubject ({data,func}) {
    const {id,logo,name,total} = data;
    return(
        <div className='border-2 rounded-md p-2'>
            <div className='shadow bg-lightWhite'>
                <img src={logo} alt="Quiz Subject" />
            </div>
            <div className='mt-5 text-center'>
                <p className='text-slate-900'>{name}</p>
                <button className='my-4 bg-common2 px-2 py-1 rounded-md text-slate-50 hover:bg-common duration-300' onClick={()=>func(data)}>Start Quiz<ArrowSmallRightIcon className='w-6 inline-block'></ArrowSmallRightIcon> </button>
            </div>
        </div>
    )
}

const QuizSubjects = () => {
    const [data,setData] = useState([]);
    
    useEffect(()=> {
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data => setData(data.data))
    },[]);

    const navigateQuizPage = useNavigate();

    const QuizPageBtn = ({id,name}) => {
        navigateQuizPage(`/${name}/${id}`)
    }
    return (
        <section className='my-10 mx-20'>
            <h1 className='text-center'>Let's Checkout Quiz</h1>
            <div className='grid grid-cols-4 gap-10 m-10'>
                {
                    data.map(dt => <QuizSubject func = {QuizPageBtn} key={dt.id} data={dt}></QuizSubject>)
                }
            </div>
        </section>
    );
};

export default QuizSubjects;