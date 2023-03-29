import React, {useState} from 'react';
import Showcount from './Showcount';

const Home = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='container'>
        <h2>Counter</h2>
        <button onClick={()=>{
            if(count!=0){
                setCount(count-1)
            }else{
                alert("menfi olmaz")
            }
        }}>
            -
        </button>
        <Showcount count={count}/>
        <button onClick={()=>setCount(count+1)}>
            +
        </button>
      
    </div>
  )
}

export default Home
