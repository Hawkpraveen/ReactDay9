import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseReducer = () => {
    const [state,dispatch]=useReducer(ReducerAction,0)
    return (
        <div className='container text-center  '>
            <h1>Using Reducer</h1>
           <div className='mt-5'>
           <button className='btn btn-success me-4' onClick={()=>{dispatch({type:'AddByTen',payload:10})}}>Click to add by 10</button>
            <button className='btn btn-danger ms-2' onClick={()=>{dispatch({type:'SubByTen',payload:10})}}>Click to minus by 10</button>
            <br /><br />
            <button className='btn btn-success me-4' onClick={()=>{dispatch({type:'Add'})}}>Click to add by 1</button>
            <button className='btn btn-danger ms-2' onClick={()=>{dispatch({type:'Sub'})}}>Click to minus by 1</button>
            <br />
           </div>
           
            <div className='container text-center mt-5 res'>
            {state}
            </div>
           
            
        </div>
    );
};

export default UseReducer;