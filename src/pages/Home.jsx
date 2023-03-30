import React, {useState} from 'react';
import Showcount from './Showcount';

const Home = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div className='container'>
        <h2>Counter</h2>
        <button onClick={()=>{
            if(counter!=0){
                setCounter(counter-1)
            }else{
                alert("menfi olmaz")
            }
        }}>
            -
        </button>
        {counter}
        <button onClick={()=>setCounter(counter+1)}>
            +
        </button>      
    </div>
  )
}

export default Home
