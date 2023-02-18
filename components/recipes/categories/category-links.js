import classes from './category-links.module.css'
import Link from 'next/link';
import { Fragment } from 'react';

function CategoryLinks() {
  return <Fragment><div className={classes.pill}>
    <Link href={'/recipes/breakfast-and-brunch'}>Breakfast and Brunch</Link>
  <Link href={'/recipes/dinner'}>Dinner</Link>
    <Link href={'/recipes/dessert'}>Dessert </Link>
    </div>
  </Fragment>
  ;
}

export default CategoryLinks;
