import Link from 'next/link';
import classes from './logo.module.css';

function Logo() {
  return <Link href='/' className={classes.logo}>drecipes</Link>;
}

export default Logo;
