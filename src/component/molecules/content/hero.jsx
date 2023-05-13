import Input from "../input/Input";
import { StyledHero } from "./content.styles";

const Hero = () => {
  return (
    <StyledHero>
      <h2>Free Link Previwer</h2>
      <Input />
      <p>
        Have you ever shared a link on social media or messaging apps only to
        find out that the preview looks unappealing or inaccurate? Our link
        previewer tool helps you avoid that frustration by providing a preview
        of your link&apos;s content before you share it.
      </p>
    </StyledHero>
  );
};

export default Hero;
