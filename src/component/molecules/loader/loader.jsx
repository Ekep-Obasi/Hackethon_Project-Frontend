/* eslint-disable react/prop-types */
import { MutatingDots } from "react-loader-spinner";

const Loader = ({ state }) => {
  return (
    <div>
      <MutatingDots
        height="100"
        width="100"
        color="#2c387e"
        secondaryColor="#ffc400"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={state}
      />
    </div>
  );
};

export default Loader;
