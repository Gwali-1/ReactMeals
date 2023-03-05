import classes from "./Modal.module.css";
import {Fragment} from "react";


 
function Backdrop(props){
  return (
    <div onClick={props.onClick} className={classes.backdrop}></div>
  )
}

function ModalOverlay(props){
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children}</div>
    </div>
  )
}



 
function Modal(props) { return(
  <>
    <Backdrop  onClick={props.onClick}/>
    <ModalOverlay>{props.children}</ModalOverlay>
  </>
 )
}


export default Modal;
