/* eslint-disable react/prop-types */
import { StyledCard, StyledCardWrapper } from "./Card.styles";
import resources from "../../../data/resources.json";
import sanitizeData from "../../../utils/sanitizeData";

const CardElement = ({ props }) => {
  return (
    <StyledCard>
      <span
        className="icon"
        dangerouslySetInnerHTML={sanitizeData(props.icon)}
      ></span>
      <span className="name">{props.name}</span>
      <span className="description">{props.description}</span>
    </StyledCard>
  );
};

const Card = () => {
  return (
    <StyledCardWrapper>
      {resources?.map((resource, i) => (
        <CardElement props={resource} key={i} />
      ))}
    </StyledCardWrapper>
  );
};

export default Card;
