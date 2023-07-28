import React from 'react';
import telegram from '../../assets/images/telegram.png';

const Telegram = () => {
    return (
        <div className="flex flex-row bg-white w-64 rounded-full mx-auto mt-12">
        <div className='basis-2/3'>
        <h2 className="text-black text-lg font-bold mt-4">مشاوره تخصصی</h2>
        </div>
        <div className='basis-1/3'>
        <a href="https://t.me/your_telegram_support_channel"
          target="_blank"
          rel="noopener noreferrer">
          <img src={telegram} alt='telegram' className='h-20'/>
        </a>
        </div>
      </div>
    );
};

export default Telegram;