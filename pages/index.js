import Head from "next/head";
import { Fragment } from "react";
import FeatureRecipes from "../components/all-pages/home-page/feature-recipes";
import Hero from "../components/all-pages/home-page/hero";
import Link from "next/link";

import FeaturedPosts from "../components/blog/featured-posts/featured-posts";
import RecipeList from "../components/recipes/recipe-list";
import { getFeaturedRecipes } from "../helpers/api-util";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>drecipes</title>
        <meta
          name="description"
          content="The most fun and simple way to eat better. The mission is to create a community of 100 million people who have improved their diet by 2050."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Aiming to be the most simple and fun way to eat better.</h1>

      <div className='homeHeadings'>
        <h2>Featured Recipes</h2>
        <Link href={'/recipes'}>View all</Link>
      </div>
      <FeatureRecipes recipes={props.recipes} />
      <div className='homeHeadings'>
        <h2>Featured Posts</h2>
        <Link href={'/blog'}>View all</Link>
      </div>
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  const featureRecipe = await getFeaturedRecipes();

  return {
    props: {
      posts: featuredPosts,
      recipes: featureRecipe,
    },
    revalidate: 1000,
  };
}

export default HomePage;
