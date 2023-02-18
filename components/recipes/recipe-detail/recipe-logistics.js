import LogisticsItem from "./logistics-item";
import classes from "./recipe-logistics.module.css";
import Image from "next/image";

function RecipeLogistics(props) {
  const { title, image, id, description,
    nutritionalValue,
    ingredient1,
    ingredient2,
    ingredient3, 
    ingredient4, 
    ingredient5, 
    ingredient6, 
    ingredient7, 
    ingredient8, 
    ingredient9, 
    ingredient10, 
    directions1,
    directions2,
    directions3,
    directions4,
    directions5,
    directions6, } =
    props;

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image width={500} height={500} src={`/${image}`} alt={title} title={title} />
      </div>
      <ul className={classes.list}>
        <h3>Ingredients:</h3>
        <ul>
        <li>{ingredient1}</li>
        <li>{ingredient2}</li>
        <li>{ingredient3}</li>
        <li>{ingredient4}</li>
        <li>{ingredient5}</li>
        <li>{ingredient6}</li>
        <li>{ingredient7}</li>
        <li>{ingredient8}</li>
        <li>{ingredient9}</li>
        <li>{ingredient10}</li>
        </ul>
        <h3>Directions:</h3>
        <ol>
          <li>{directions1}</li>
          <li>{directions2}</li>
          <li>{directions3}</li>
          <li>{directions4}</li>
          <li>{directions5}</li>
          <li>{directions6}</li>
        </ol>
        <h3>Nutritional Value</h3>
        <p>{nutritionalValue}</p>
        </ul>
    </section>
  );
}

export default RecipeLogistics;
