import React from "react";
import style from "./SideMenu.module.css";
import NavItems from "../NavItems/NavItems";

const sideMenu = props => {
  let sideMenuOpen = [];
  if (props.show) {
    sideMenuOpen = [style.SideMenu, style.SideMenuOpen].join(" ");
  } else {
    sideMenuOpen = [style.SideMenu];
  }

  return (
    <div className={sideMenuOpen}>
      <p className={style.X}>
        <i onClick={props.clicked} className="fas fa-times"></i>
      </p>
      <NavItems genre={props.genre} />
    </div>
  );
};
export default sideMenu;
