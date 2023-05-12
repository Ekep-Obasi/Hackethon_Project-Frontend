import { StyledLinkCardWrapper } from "./LinkCard.styles";

const LinkCard = () => {
  return (
    <StyledLinkCardWrapper>
      <div className="link-info">
        <h2>Careers at FW Group</h2>
        <p>
          We are looking for people to join our team and help us redifine...
        </p>
        <div className="link">
          <img
            src="https://www.youtube.com/s/desktop/cbc86408/img/favicon_144x144.png"
            alt=""
          />
          <a href="https://www.youtube.com/watch?v=BSmLRK0liVg">
            https://www.youtube.com/watch?v=BSmLRK0liVg
          </a>
        </div>
      </div>
      <div className="link-image">.</div>
    </StyledLinkCardWrapper>
  );
};

export default LinkCard;
