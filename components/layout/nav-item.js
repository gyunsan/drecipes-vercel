import Link from "next/link";
import classes from './nav-item.module.css'

const NavItem = ({ text, href, icon, active }) => {
  return (
    <div className={classes.row}>
    <Link href={href}
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {/* <div id={classes.icon}>{icon}</div> */}
       <div id={classes.title}>{text}</div>
        
    </Link>
    </div>
  );
};

export default NavItem;