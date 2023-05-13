import { useContext } from "react";
import { HomeStyles, StyledHomeContent } from "./home.styles";
import Loader from "../../component/molecules/loader/loader";
import { AppContext } from "../../context/context";
import TopBar from "../../component/templates/topbar/TopBar";
import Card from "../../component/atoms/card/Card";
import Desription from "../../component/molecules/content/description";
import Hero from "../../component/molecules/content/hero";
import Footer from "../../component/templates/footer/Footer";

const Home = () => {
  const { isLoading } = useContext(AppContext);

  return (
    <HomeStyles>
      <TopBar />
      <Loader state={isLoading} />
      <StyledHomeContent>
        <Hero />
        <Desription />
      </StyledHomeContent>
      <Card />
      <Footer />
    </HomeStyles>
  );
};

export default Home;
