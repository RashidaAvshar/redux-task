import React from 'react'
import { connect } from 'react-redux'


const Showcount = (props) => {
  return (
    <div className='container'>
        <div>{props.count}</div>
      
    </div>
  )
}


function mapStateProps(state){
    return{
        count: state.count,
    }

}


export default connect(mapStateProps) (Showcount);
