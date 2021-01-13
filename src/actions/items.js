import {GET_ITEMS, ADD_ITEMS,DEL_ITEMS,ITEMS_LOADING} from '../actions/type'
import axios from 'axios'
//creating an action
  export const getItems =() => dispatch =>{
     dispatch(setItemsloading())
     axios.get('https://enashairs.herokuapp.com/enahair')
      
     .then(
        res=>dispatch(
        {
           type:GET_ITEMS,
           payload:res.data
        }
     ))
 }
 export const deleteItem =(id) =>dispatch=>{
   axios.delete(`https://enashairs.herokuapp.com/enahair/${id}`)
   .then(res=>
      dispatch({type:DEL_ITEMS,
      payload:id}))
   
}

export const addItem =(item)=> dispatch=>{
      
   axios.post('https://enashairs.herokuapp.com/enahair',item)
   .then(res => 
      dispatch({
         type: ADD_ITEMS,
         payload: res.data
      })).catch((error)=>console.log(error))
   
}

export const setItemsloading =() =>{
   return {
      type:ITEMS_LOADING
   }
   
}