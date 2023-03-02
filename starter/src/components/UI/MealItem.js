import classes from "./MealItem.module.css"; 

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
          
      </div>
    </li>
  )
  
}


export default MealItem;
