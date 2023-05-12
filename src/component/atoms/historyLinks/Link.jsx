import { StyledLink } from "./Link.styles";

const Link = () => {
  return (
    <StyledLink>
      <div className="link">
        <img
          src="https://www.youtube.com/s/desktop/cbc86408/img/favicon_144x144.png"
          alt=""
        />
        <a href="https://www.youtube.com/watch?v=BSmLRK0liVg">
          https://www.youtube.com/watch?v=BSmLRK0liVg
        </a>
      </div>

      <button type="button">&times;</button>
    </StyledLink>
  );
};

export default Link;
