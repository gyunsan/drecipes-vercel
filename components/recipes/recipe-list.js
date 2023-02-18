import RecipeItem from "./recipe-item";
import classes from "./recipe-list.module.css";

function RecipeList(props) {
  const { items } = props;

  return (
    <div className={classes.list}>
      {items.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          directions1={recipe.directions1}
          directions2={recipe.directions2}
          directions3={recipe.directions3}
          directions4={recipe.directions4}
          directions5={recipe.directions5}
          directions6={recipe.directions6}
          ingredient1={recipe.ingredient1}
          ingredient2={recipe.ingredient2}
          ingredient3={recipe.ingredient3}
          ingredient4={recipe.ingredient4}
          ingredient5={recipe.ingredient5}
          ingredient6={recipe.ingredient6}
          ingredient7={recipe.ingredient7}
          ingredient8={recipe.ingredient8}
          ingredient9={recipe.ingredient9}
          ingredient10={recipe.ingredient10}
          image={recipe.image}
          isFeatured={recipe.isFeatured}
          description={recipe.description}
          nutritionalValue={recipe.nutritionalValue}
        />
      ))}
    </div>
  );
}

console.log("items");
export default RecipeList;
