import React from 'react';
import v1 from '../../assets/videos/v1.mp4';

const Tutorial = () => {
    return (
        <>
        <div className='flex flex-row '>
            <div className='basis-3/4 bg-green-100'>
              <div className='m-16'>
                <div className='bg-gray-600 p-4'>
                <video className='w-full h-[36rem] border-2 border-gray-200' controls poster=''>
                 <source src={v1} type='video/mp4'></source>
                </video>
                </div>
                </div> 
            </div>
            <div className='basis-1/4 bg-green-100'>
                <ul className='bg-gray-100 m-8 pt-8 pb-8 rounded-3xl'>
                    <li className='mt-8'>فیلم شماره 1</li>
                    <li className='my-8'>فیلم شماره 2</li>
                    <li className='my-8'>فیلم شماره 3</li>
                    <li className='my-8'>فیلم شماره 4</li>
                    <li className='my-8'>فیلم شماره 5</li>
                    <li className='my-8'>فیلم شماره 6</li>
                    <li className='my-8'>فیلم شماره 7</li>
                    <li className='my-8'>فیلم شماره 8</li>
                    <li className='my-8'>فیلم شماره 9</li>
                    <li className='my-8'>فیلم شماره 10</li>

                </ul>
            </div>
        </div>
        </>
    );
};

export default Tutorial;