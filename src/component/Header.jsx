import React from 'react';
import { Link } from "react-router-dom"
import Showcount from '../pages/Showcount';
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <header>
        <div className='container'>
            <div className="header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/product">Card</Link></li>
                </ul>
                <ul className='icon'>
                    <li><i className="fa-solid fa-bag-shopping">{props.count}</i></li>
                </ul>
            </div>
        </div>
    </header>      
  )
}

function mapStateProps(state){
    return{
        count: state.count,
    }

}

export default connect(mapStateProps) (Header)

