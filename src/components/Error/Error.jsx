import errorImage from "../../images/error.png";
import css from "./Error.module.css";

const Error = () => {
  return (
    <div>
      <h2 className={css.title}>All Your Contacts in One Convenient Place</h2>
      <img className={css.image} src={errorImage} alt="error" />
    </div>
  );
};

export default Error;
