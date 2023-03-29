import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CardItem from '../component/CardItem';



const Product = (props) => {

    const [data, setData] = useState([])
    useEffect(()=>{
        axios("https://fakestoreapi.com/products")
        .then((res)=>{
            setData(res.data)
        })
    }, [])

  
  return (
    <div className='container'>
    <div className='cards-box'>
    {
        data.map(item=>(
          <CardItem key={item.id} title = {item.title} description = {item.description} image = {item.image}/>
        ))
      }
    </div>
           
    </div>
  )
}

function mapStateProps(state){
  return{
      count: state.count,
  }

}

export default connect(mapStateProps) (Product)