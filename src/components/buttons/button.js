import React from 'react';

const Button = (props) => {
    return (
        <div className='mx-auto pt-1 rounded-2xl w-32 h-32 cursor-pointer border-solid border-2 border-green-600 hover:bg-yellow-300'>
            <strong>{props.name}</strong>
            <img src={props.source} alt='' className='w-16 h-16 mt-8 mx-auto'/>
        </div>
    );
};

export default Button;