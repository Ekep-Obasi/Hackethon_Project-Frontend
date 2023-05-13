/* eslint-disable react/prop-types */
import { ThreeDots } from "react-loader-spinner";
import { StyledLoader } from "./loader.styles";

const Loader = ({ state }) => {
  return (
    <StyledLoader>
      <ThreeDots
        height="80"
        width="80"
        color="#2c3e50"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={state}
      />
    </StyledLoader>
  );
};

export default Loader;
