import CartContext from "./cart-context";
import {useReducer} from "react";



const defaultState = {
  items:[],
  totalAmount:0 
}
const cartReducer = function(state,action){
  switch(action){
    case "ADD":
      const updateditems = state.items.concat(action.item);
      const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items:updateditems,
        totalAmount:updatedAmount
      }

    case "REMOVE":
      break
    default:
      return defaultState;
  }
}
function CartProvider(props){

  const [cartState,dispatchCartAction] = useReducer(cartReducer, defaultState);

  const additem = function (item){
    dispatchCartAction({
      type:"ADD",
      item:item 
    })
  }

  const removeItem = function(){

  }
 
  const cartContext = {
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: additem,
    removeItem:removeItem 
  }
  return <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>

}


export default CartProvider;
