import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
function Cart(props){
  const cartItems = [{id:"c1",name:"shushi",amount:2,price:12.99}].map(item => <li>{item.name}</li>)
  return(
    <Modal  onClick={props.onHideCart}>
    <ul className={classes["cart-items"]}>
      {cartItems}
    </ul>
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>32.5</span> </div>
    <div className={classes.actions}>
      <button  onClick={props.onHideCart} className={classes["button--alt"]}>Close</button>
      <button className={classes.button}>Order</button>

    </div>
    </Modal>
  )

}

export default Cart;
