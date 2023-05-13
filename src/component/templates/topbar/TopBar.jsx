/* eslint-disable react/prop-types */
import Logo from "../../atoms/logo/Logo";
import { NavLink } from "react-router-dom";
import { StyledMenu, StyledTopBar } from "./TopBar.styles";
import { useState } from "react";

const Menu = ({ props }) => {
  const { isOpen, setIsOpen } = props;

  return (
    <StyledMenu
      type="button"
      status={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span id="first"></span>
      <span id="second"></span>
      <span id="third"></span>
    </StyledMenu>
  );
};

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StyledTopBar status={isOpen}>
      <Logo />
      <div className="drawer">
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
        <div className="actions">
          <button type="button">
            <NavLink to="/login">Login</NavLink>
          </button>
          <button type="button">
            <NavLink to="/sign-up">Sign Up</NavLink>
          </button>
        </div>
      </div>
      <Menu props={{ isOpen, setIsOpen }} />
    </StyledTopBar>
  );
};

export default TopBar;
