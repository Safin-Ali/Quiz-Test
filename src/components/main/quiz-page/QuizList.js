import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const QuizList = () => {
    const {data} = useLoaderData();
    const {id,name,logo,questions,total} = data;
    return (
        <section className='my-10'>
            <h2 className='text-center'>Quiz Of {name}</h2>
            {
                questions.map((question,index) => <QuizCard index={index+1} key={question.id} data={question}></QuizCard>)
            }
        </section>
    );
};

export default QuizList;