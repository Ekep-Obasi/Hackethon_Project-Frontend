import Link from "../component/atoms/historyLinks/Link";
import LinkCardSkeleton from "../component/molecules/linkCard/LinkCardSkeleton";

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
      <Link />
      <LinkCardSkeleton />
    </div>
  );
};

export default Test;
