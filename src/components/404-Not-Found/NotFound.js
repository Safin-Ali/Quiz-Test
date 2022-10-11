import { FaceFrownIcon } from '@heroicons/react/24/outline';
import React from 'react';

const NotFound = () => {
    return (
        <section className='flex flex-col items-center h-screen justify-center'>
            <h1 className='text-9xl text-center text-gray-600'>404 <FaceFrownIcon className='inline-block w-1/5'></FaceFrownIcon></h1>
            <p className='text-red-600 text-xl my-10'>Please Go Back!</p>
        </section>
    );
};

export default NotFound;