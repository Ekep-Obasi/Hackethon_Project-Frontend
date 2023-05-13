/* eslint-disable react/no-unknown-property */
import Logo from "../../component/atoms/logo/Logo";
import LinkPreviews from "../../component/molecules/linkCard/LinkCard";
import Footer from "../../component/templates/footer/Footer";
import { StyledResult, StyledSocialButtons } from "./result.styles";

const SocailMediaHandles = () => {
  return (
    <StyledSocialButtons>
      <p>Share:</p>
      <button type="button" id="whatsapp">
        <i className="fa-brands fa-whatsapp"></i>
      </button>
      <button type="button" id="twitter">
        <i className="fa-brands fa-twitter"></i>
      </button>
      <button type="button" id="linkedin">
        <i className="fa-brands fa-linkedin"></i>
      </button>
      <button type="button" id="facebook">
        <i className="fa-brands fa-facebook"></i>
      </button>
    </StyledSocialButtons>
  );
};

const Results = () => {
  return (
    <StyledResult>
      <div className="header">
        <Logo />
      </div>
      <div className="box">
        <h2>Here is your Preview</h2>
        <LinkPreviews />

        <SocailMediaHandles />
      </div>
      <Footer />
    </StyledResult>
  );
};

export default Results;
