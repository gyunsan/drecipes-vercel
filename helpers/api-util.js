import slugify from "slugify";

export async function getAllRecipes() {
  const response = await fetch(
    "https://react-getting-started-4835f-default-rtdb.firebaseio.com/1iRD1b1hVvaeralKO7TY_gq4GdgAMVVQtLC9bEtasURk/keto.json",
  );
  const data = await response.json();

  const recipes = [];

  for (const key in data) {
    recipes.push({
      id: key,
      ...data[key],
    });
  }

  return recipes;
}
export async function getAllRecipesWithAllData() {
  const response = await fetch(
    "https://react-getting-started-4835f-default-rtdb.firebaseio.com/1iRD1b1hVvaeralKO7TY_gq4GdgAMVVQtLC9bEtasURk/keto.json",
  );
  const data = await response.json();

  const recipes = [];

  for (const key in data) {
    recipes.push({
      id: key,
      ...data[key],
    });
  }

  return recipes;
}


export async function getFeaturedRecipes() {
  const allRecipes = await await getAllRecipesWithAllData();
  return allRecipes.filter((recipe) => recipe.isFeatured);
}

export async function getRecipeByTitle(title) {
  const allRecipes = await await getAllRecipesWithAllData();

  const recipe = allRecipes.find((recipe) => {
    return slugify(recipe.title).toLocaleLowerCase() === title;
  });
  return recipe;
}