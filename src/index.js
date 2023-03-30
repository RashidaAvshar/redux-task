import React from 'react';
import {createStore} from "redux";
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import "./style/main.scss";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { action } from './redux/actions/action';

const initialState = {
  count: 0,
  procount: 0
}
const {increment, decrement, addToCard} = action;

function reducer(state=initialState, action){
  switch(action.type){
    case increment:{
      return{
        ...state,
        count:state.count +1
      };
    }
    case decrement:{
      if(state.count==0){
        alert("menfi olmaz")
        return{
          ...state,
          count:state.count
        };
      }else{
        return{
          ...state,
          count:state.count -1
        };
      }
      
    }
    case addToCard:{
      return{
        ...state,
        procount: state.procount +1
      }
    }
    default: 
    return state;
  }

}

const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <BrowserRouter>
    
      <App />
   
  </BrowserRouter>
  </Provider>
);

