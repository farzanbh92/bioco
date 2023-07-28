import React from 'react';

const Members = (props) => {
    return (
        
        <div className='w-60 rounded-3xl p-4 bg-gray-100 border-2 border-blue-500'>
            <img src={props.pic} alt=''/>
            <div className='text-lg font-bold mt-8'>{props.name}</div>
            <div className='text-lg mt-4'>سمت: {props.position}</div>
        </div>
    );
};

export default Members;