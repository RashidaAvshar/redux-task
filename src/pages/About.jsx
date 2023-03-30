import React, {useState} from 'react';
import { connect } from 'react-redux';
import Showcount from './Showcount';

const About = (props) => {

  return (
    <div className='container'>
        <h2>Counter</h2>
        <button onClick={()=>{
            props.dispatch({type: "INCREMENT"})
        }}>
            +
        </button >
        <Showcount />
        <button onClick={()=>{ 
            props.dispatch({type: "DECREMENT"})
        }}>
            -
        </button>
      
    </div>
  )
}

function mapStateProps(state){
    return{
        count: state.count,
    }

}


export default connect(mapStateProps) (About);



