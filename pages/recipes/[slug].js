import { Fragment } from "react";

import {
  getRecipeByTitle,
  getAllRecipes,
  getAllRecipesWithAllData,
} from "../../helpers/api-util";
import RecipeSummary from "../../components/recipes/recipe-detail/recipe-summary";
import RecipeLogistics from "../../components/recipes/recipe-detail/recipe-logistics";
import RecipeContent from "../../components/recipes/recipe-detail/recipe-content";
import ErrorAlert from "../../components/layout/ui/error-alert";
import slugify from "slugify";

function SingleRecipe(props) {
  const recipe = props.selectedRecipe;

  if (!recipe) {
    return (
      <ErrorAlert>
        <p>No recipe found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <RecipeSummary title={recipe.title} />
      <RecipeLogistics
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
        directions1={recipe.directions1}
        directions2={recipe.directions2}
        directions3={recipe.directions3}
        directions4={recipe.directions4}
        directions5={recipe.directions5}
        directions6={recipe.directions6}
        image={recipe.image}
        imageAlt={recipe.title}
        nutritionalValue={recipe.nutritionalValue}
      />
      <RecipeContent>
        <p>{recipe.description}</p>
      </RecipeContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const recipe = await getRecipeByTitle(slug);
  return {
    props: {
      selectedRecipe: recipe || "",
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const recipes = await getAllRecipesWithAllData();

  const paths = recipes.map((recipe) => ({
    params: { slug: slugify(recipe.title).toLocaleLowerCase() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default SingleRecipe;
