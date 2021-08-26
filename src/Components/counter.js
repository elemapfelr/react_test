import { useState } from 'react';
import React from 'react';

function Counter(){
    const [num, setnum]=useState(0);

    const onIncrease=()=>{
        console.log('+1');
        setnum(prevnum => prevnum +1)
    }
    const onDecrease=()=>{
        console.log('-1');
        setnum(prevnum => prevnum-1);
    }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onIncrease}>+1</button>
        </div>
    )
}

export default Counter;