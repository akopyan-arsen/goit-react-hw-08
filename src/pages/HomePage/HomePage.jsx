import css from "./HomePage.module.css";
import homeImg from "../../images/telephone.png";

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <img src={homeImg} alt="homePage" className={css.img} />
    </div>
  );
};

export default HomePage;
