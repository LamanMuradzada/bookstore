import React from 'react';
import ReactLoading from "react-loading";
import "./loading.css";


const Loading = () => {
  return (
    <div className='loading'>
        <ReactLoading type='spin' color='blue'/>
    </div>
  )
}

export default Loading
