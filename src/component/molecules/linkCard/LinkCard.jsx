/* eslint-disable react/prop-types */
import { useContext } from "react";
import { formatParagraph, formatString } from "../../../utils/formatText";
import { StyledLinkCardWrapper } from "./LinkCard.styles";
import { AppContext } from "../../../context/context";

const LinkCard = ({ props }) => {
  return (
    <StyledLinkCardWrapper img={props.image}>
      <div className="link-info">
        <h2>{props.title}</h2>
        <p>{formatParagraph(props.description)}</p>
        <div className="link">
          <img src={props.icon} alt="" />
          <a href={props.url}> {formatString(props.url)}</a>
        </div>
      </div>
      <div className="link-image"></div>
    </StyledLinkCardWrapper>
  );
};

const LinkPreviews = () => {
  const { url } = useContext(AppContext);

  return (
    <>
      {url?.map((el, i) => (
        <LinkCard props={el} key={i} />
      ))}
    </>
  );
};

export default LinkPreviews;
