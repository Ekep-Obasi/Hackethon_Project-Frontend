import { useContext, useState } from "react";
import { FormWrapprer, HomeStyles, StyledInput } from "./home.styles";
import { sendUrl } from "../../actions/sendUrl";
import Loader from "../../component/molecules/loader/loader";
import { AppContext } from "../../context/context";

const Home = () => {
  const [url, setUrl] = useState([]);
  const [image, setImage] = useState();
  const { isLoading, setIsLoading } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { target } = e;
    setUrl((prev) => [...prev, target.elements.url.value]);
    sendUrl(target.elements.url.value)
      .then((res) => cons)
      .then(() => setIsLoading(false));
  };

  return (
    <HomeStyles>
      <FormWrapprer
        img={image}
        state={url.length}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1>URL Previewer</h1>
        <p>Paste the link to be previewed</p>
        <div className="box">
          <Loader state={isLoading} />
          <a href="">Link Here</a>
        </div>
        <div className="input-wrapper">
          <StyledInput
            placeholder="Enter the link"
            type="url"
            name="url"
            id="url"
            required
          />
          <button type="submit">Enter</button>
        </div>
      </FormWrapprer>
    </HomeStyles>
  );
};

export default Home;
