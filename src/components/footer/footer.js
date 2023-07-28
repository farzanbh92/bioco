import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-green-100 grid grid-cols-1 justify-items-end pr-12 md:pr-32'>
            <div className='pt-36 pb-10 text-lg font-bold md:text-xl'>
                هدف :             لورم ایپسوم یا طرح‌نما  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود

            </div>
            <div className='pt-10 pb-10 text-lg md:text-xl'>
                آدرس :            لورم ایپسوم یا طرح‌نما  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود

            </div>
            <div className='pt-10 pb-10 text-lg font-bold md:text-xl'>
تلفن ثابت: 0210000000000 واتسپ :0912000000000 
            </div>
            <div className='pt-10 pb-10 text-lg font-bold md:text-xl text-blue-500'>
            <a href = "mailto: abc@example.com">example@gmail.com</a>
            </div>
        </footer>
    );
};

export default Footer;