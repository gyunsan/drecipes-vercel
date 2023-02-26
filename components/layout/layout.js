import { Fragment } from "react";
import classes from './layout.module.css'


function Layout(props) {
  return (
    <Fragment>
        <main className={classes.page}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;