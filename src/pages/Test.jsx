import Link from "../component/atoms/historyLinks/Link";
import LinkCard from "../component/molecules/linkCard/LinkCard";

const Test = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        justifyContent: "center",
      }}
    >
      <LinkCard />
      <Link />
    </div>
  );
};

export default Test;
