/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom";
import { StyledDescription } from "./content.styles";

const Desription = () => {
  return (
    <StyledDescription>
      <h2>A Fast and Easy to use Link Previewer</h2>
      <p>
        Welcome to our free link previewer and link shortener tool! With our
        user-friendly website, you can easily generate eye-catching link
        previews and shorten long links with just a few clicks. Our tool
        supports a wide range of websites, making it easy to share your links on
        social media or in emails. Best of all, our service is completely free
        to use. Try it out today and start sharing your links in style!
      </p>
      <h3>Want More? Try Premium Features!</h3>
      <p>
        Preview Links,Link preview management, shorten links, powerful
        dashboard, detailed analytics,social media sharing and more{" "}
      </p>
      <i class="fa-beat">
        <button>
          <NavLink to="/sign-up">Create Account</NavLink>
        </button>
      </i>
    </StyledDescription>
  );
};

export default Desription;
