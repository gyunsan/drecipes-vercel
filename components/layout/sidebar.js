import Link from "next/link";
import classes from "./sidebar.module.css";
import Footer from "./footer/footer";

const Sidebar = () => {
  return (
      <div className={classes.Sidebar}>
        <nav>
          <ul className={classes.SidebarList}>
            <Link href="/">
              <li className={classes.row}>
                {/* <div id={classes.icon}>
                  <HomeIcon />
                </div> */}
                <div id={classes.title}>home</div>
              </li>
            </Link>
            <Link href="/recipes">
              <li className={classes.row}>
                {/* <div id={classes.icon}>
                  <MenuBookIcon />
                </div> */}
                <div id={classes.title}>recipes</div>
              </li>
            </Link>
            <Link href="/blog">
              <li className={classes.row}>
                {/* <div id={classes.icon}>
                  <ArticleIcon />
                </div> */}
                <div id={classes.title}>blog</div>
              </li>
            </Link>
            <Link href="/contact">
              <li className={classes.row}>
                {/* <div id={classes.icon}>
                  <PermContactCalendarIcon />
                </div> */}
                <div id={classes.title}>contact</div>
              </li>
            </Link>
          </ul>
        </nav>
        <Footer />
      </div>
  );
};

export default Sidebar;
