import classes from './categories.module.css';
import Link from 'next/link';

function Categories() {
  return <div className={classes.pill}>
    <Link href={'/recipes/breakfast-and-brunch'}>Breakfast and Brunch</Link>
  </div>;
}

export default Categories;
