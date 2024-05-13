import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    const[data,setData]=useState('')
    const myRef=useRef()
    const secRef=useRef()
    //to focus
    useEffect(()=>{
        myRef.current.focus();
    },[])
    //getting value
    const handleClick=()=>{
        console.log(myRef.current.value);
        secRef.current=myRef.current.value
        setData(data=>data+1)
    }
    return (
        <div>
            <h1>Using Use Ref</h1>
            <input type="text" placeholder='Enter Name'  ref={myRef}/>
            <button type="button" onClick={handleClick}>Click</button>
           <br /> Entered Data : {secRef.current}
        </div>
    );
};

export default UseRef;