import Link from "next/link";
import classes from "./top-header.module.css";
import Logo from "./logo";
import React, { useState } from "react";
import NavItem from "./nav-item";

const MENU_LIST = [
  { text: "Home", href: "/"},
  { text: "Recipes", href: "/recipes"},
  { text: "Blog", href: "/blog"},
  { text: "About", href: "/about"},
  { text: "Contact", href: "/contact"},
];
const TopHeader = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={classes.nav}>
        <div className={classes.innerhead}>
        <Link href="/">
            <Logo />
          </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}


        </div>

          </div>
      </nav>
    </header>
  );
};

export default TopHeader;
