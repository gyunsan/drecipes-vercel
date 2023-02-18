import { Fragment } from "react";
import TopHeader from "./top-header";
import classes from './layout.module.css'
import Footer from "./footer/footer";
import Sidebar from "./sidebar";


function Layout(props) {
  return (
    <Fragment>
        <TopHeader />
        <main className={classes.page}>{props.children}</main>
        <Footer />
    </Fragment>
  );
}

export default Layout;
