import { useContext } from "react";
import { AppContext } from "../../../context/context";
import { StyledInput, StyledInputWrapper } from "./Input.styles";
import { sendUrl } from "../../../actions/sendUrl";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const { setIsLoading, setUrl } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { target } = e;
    sendUrl(target.elements.url.value)
      .then((res) => setUrl((prev) => [...prev, res.data]))
      .then(() => setIsLoading(false))
      .then(() => navigate("/result"));
  };

  return (
    <StyledInputWrapper onSubmit={(e) => handleSubmit(e)}>
      <StyledInput
        placeholder="Enter the link"
        type="url"
        name="url"
        id="url"
        required
      />
      <button type="submit">Enter</button>
    </StyledInputWrapper>
  );
};

export default Input;
