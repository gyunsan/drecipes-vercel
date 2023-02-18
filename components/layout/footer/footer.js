import classes from '../../layout/footer/footer.module.css';
import Link from "next/link";


function Footer() {
  return (
    <div className={classes.footer}>
      <footer>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privicy</Link>
        <Link href="/cookies">Cookies</Link>
        <Link href="/about">About</Link>
        <p>All rights reserved © drecipes  </p>
      </footer>
    </div>
  );
}

export default Footer;
