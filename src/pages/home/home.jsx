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
    const { target } = e;
    setUrl((prev) => [...prev, target.elements.url.value]);
    setImage(async () => await sendUrl(target.elements.url.value));
    console.log(await image);
    console.log(url);
  };

  const handleChange = (url) => {
    if (url.length === 0 || url === "") {
      isLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  return (
    <HomeStyles>
      <FormWrapprer
        img={image}
        state={isLoading}
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
            onChange={(e) => handleChange(e.target.value)}
            required
          />
          <button type="submit">Enter</button>
        </div>
      </FormWrapprer>
    </HomeStyles>
  );
};

export default Home;
