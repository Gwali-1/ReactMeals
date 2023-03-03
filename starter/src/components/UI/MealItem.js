import classes from "./MealItem.module.css"; 
import MealItemForm from "./MealItemForm";
function MealItem(props){
  
  return (
    <li  className={classes.meal}>
      <div>
        <div>
          <h3>{props.meals.name}</h3>
        </div>

        <div className={classes.description}>
          {props.meals.description}
        </div>

        <div className={classes.price}>
          ${props.meals.price.toFixed(2)}
        </div>
      </div>

      <div>
      {/* form element goes here */}
       <MealItemForm id={props.id}/> 
     </div>
    </li>
  )
  
}


export default MealItem;
