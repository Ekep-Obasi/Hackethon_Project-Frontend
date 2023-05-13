import Skeleton from "react-loading-skeleton";
import { StyledLinkCardWrapper } from "./LinkCard.styles";
import "react-loading-skeleton/dist/skeleton.css";

const LinkCardSkeleton = () => {
  return (
    <StyledLinkCardWrapper>
      <div className="link-info">
        <h2>
          <Skeleton width={225} />
        </h2>
        <p>
          <Skeleton count={1.5} height={12} width={350} />
        </p>
        <div className="link">
          <Skeleton height={20} width={30} />
          <a href="">
            <Skeleton height={12} width={300} />
          </a>
        </div>
      </div>
      <Skeleton height={110} width={250} />
    </StyledLinkCardWrapper>
  );
};

export default LinkCardSkeleton;
