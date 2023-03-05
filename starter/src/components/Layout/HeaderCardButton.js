import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import {useContext} from "react";
import cartContext from "../../store/cart-context";

function HeadercardButton(props){

  const cartCtx = useContext(cartContext);

  const numberOfCartItems = cartCtx.items.reduce((curr, item)=> {
    return curr + item.amount ;

  },0)

  return <button  className={classes.button}  onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon/>
    </span>
    <span>Your Cart</span> 
    <span className={classes.badge}>
    {numberOfCartItems}
    </span>
    </button>



}


export default HeadercardButton;
