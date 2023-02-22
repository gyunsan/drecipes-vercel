import { Fragment } from "react";
import { useRouter } from "next/router";
import FeatureRecipes from "../../components/all-pages/home-page/feature-recipes";
import CategoryLinks from "../../components/recipes/categories/category-links";

import { getAllRecipes } from "../../helpers/api-util";
import RecipeList from "../../components/recipes/recipe-list";
// import RecipesSearch from '../../components/recipes/recipes-search';

function AllRecipesPage(props) {
  const router = useRouter();
  const { recipes } = props;

  return (
    <Fragment>
      <h1>Browse All Recipes</h1>
      <h2>
     Discover the delicious world of healthy eating with our healthy recipes website!
     We believe that healthy food can be both nutritious and tasty, and our goal is to provide you with recipes that are both good for you and satisfying to your taste buds. Whether you're looking to lose weight, improve your overall health, or simply eat more nutritious meals, our website has got you covered.
      </h2>
      <CategoryLinks />
      <RecipeList items={recipes} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const recipes = await getAllRecipes();

  return {
    props: {
      recipes: recipes,
    },
    revalidate: 60,
  };
}

export default AllRecipesPage;
