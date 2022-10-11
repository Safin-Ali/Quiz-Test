import React from 'react';

const QuesToAns = () => {
    return (
        <section className='my-10'>
            <div className='shadow my-10 p-5 bg-lightWhite3 text-center rounded-md w-3/4 container mx-auto'>
                <h4 className='text-4xl underline my-5 capitalize text-stone-900'>what is the purpise react router</h4>
                <p className='font-medium my-5 text-slate-700 capitalize'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='shadow my-10 p-5 bg-lightWhite3 text-center rounded-md w-3/4 container mx-auto'>
                <h4 className='text-4xl underline my-5 capitalize text-stone-900'>how does context api work</h4>
                <p className='font-medium my-5 text-slate-700 capitalize'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='shadow my-10 p-5 bg-lightWhite3 text-center rounded-md w-3/4 container mx-auto'>
                <h4 className='text-4xl underline my-5 capitalize text-stone-900'>what is react useref hooks</h4>
                <p className='font-medium my-5 text-slate-700 capitalize'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </section>
    );
};

export default QuesToAns;