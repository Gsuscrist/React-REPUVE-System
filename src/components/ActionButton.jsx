import { PropTypes } from "prop-types";
import actionImage from "../assets/imgs/action-image.jpeg";
import "../assets/styles/ActionButton.css";

export function ActionButton({ text, href }) {
  return (
    <a href="{href}">
      <div className="container">
        <img src={actionImage} className="actionImage" />
        <p className="text">{text} </p>
      </div>
    </a>
  );
}

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
