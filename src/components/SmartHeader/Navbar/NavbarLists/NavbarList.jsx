import React from 'react';
import "./NavbarList.scss";

const NavbarList = ({barList}) => {
  return (
    <>
        {barList.map((item, index) => <a key={index} href='#' > {item} </a>)}
    </>
  )
}

export default NavbarList