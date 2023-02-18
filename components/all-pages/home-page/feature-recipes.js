import React from "react";
import RecipeList from "../../recipes/recipe-list";
import classes from './feature-recipes.module.css';

export default function FeatureRecipes({ recipes }) {
  return (
    <div className={classes.featured}>
        <RecipeList items={recipes} />
      
</div>
  );
}
