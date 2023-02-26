import { Link } from '@mui/material';
import GreenHexaLogo from '../../public/drecipes-logo-green-hexagon.svg';
import classes from './logo.module.css';

function Logo() {
  return <div className={classes.logo}><Link href='/'>drecipes </Link></div>;
}

export default Logo;
