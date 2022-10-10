import React from 'react';
import BannerVector from     '../../../image/vector-01.jpg'

const Banner = () => {
    return (
        <section className='my-14 grid grid-cols-2 container mx-auto items-center gap-10'>
            <div className='border-r-2 border-common80'>
                <img src={BannerVector} className='max-w-full h-auto' alt="Banner Vector" />
            </div>
            <div>
                <p className='text-slate-800 text-center'><strong>quiza help grow our active knowledge. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perspiciatis.</strong></p>
            </div>
        </section>
    );
};

export default Banner;