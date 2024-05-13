import React, { useState } from 'react';

const CompA = () => {
    const [data,setData]=useState('');
    const handleChange=(e)=>{
        setData(e.target.value)
    }
    return (
        <div>
            <h1>Without Use Ref</h1>
            <label>Text : </label>
            <input type="text" value={data} onChange={handleChange}  />
            <br />
          Entered Data :  {data}
        </div>
    );
};

export default CompA;