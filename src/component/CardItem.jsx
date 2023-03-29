import React from 'react'
import { connect } from 'react-redux'

const CardItem = (props) => {
    const {title, image, price, description} = props
  return (
         <div className="card">
    <img src={image} alt="product" />
    <p>{title.slice(0,10)}</p>
    <p>{description.slice(0,10)}</p>
    <div className='icon'>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    </div>
    <span> <span>$</span> {price}</span>
    <span className='add-basket' onClick={()=> {
      props.dispatch({
        type: "ADDTOCARD"
      })
    }}>ADD to basket</span>
        </div>  
    
  )
}

function mapStateProps(state){
    return{
        count: state.count,
    }
  
  }
  
  export default connect(mapStateProps) (CardItem)
