/* eslint-disable react/prop-types */

import { StyledFooter, StyledMediaHandle } from "./Footer.styles";

/* eslint-disable react/no-unknown-property */
const Link = (props) => {
  return (
    <StyledMediaHandle>
      <a href={props.href}>{props.icon}</a>
      <span>{props.label}</span>
    </StyledMediaHandle>
  );
};

const Footer = () => {
  return (
    <StyledFooter>
      <div className="links">
        <Link
          label="gitHub"
          href="https://github.com/Ekep-Obasi"
          icon={<i className="fa-brands fa-github"></i>}
        />
        <Link
          label="twitter"
          href="https://twitter.com/ArreyEkep"
          icon={<i className="fa-brands fa-twitter"></i>}
        />
        <Link
          label="likedIn"
          href="https://www.linkedin.com/in/arrey-etta-439764230/"
          icon={<i className="fa-brands fa-linkedin"></i>}
        />
        <Link
          label="Medium"
          href="https://medium.com/@arreyettaekep/"
          icon={<i className="fa-brands fa-medium"></i>}
        />
        <Link
          label="Gmail"
          href="arreyettaekep@gmail.com"
          icon={<i className="fa-brands fa-google"></i>}
        />
        <Link
          label="facebook"
          href="https://twitter.com/ArreyEkep"
          icon={<i className="fa-brands fa-facebook"></i>}
        />
      </div>

      <p>
        Copyright © 2023 LinkPreviewer. <br /> All rights reserved. This website
        is inspired by Rebase Academy Hackathon.
      </p>
    </StyledFooter>
  );
};

export default Footer;
