import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleClick = () => dispatch(logout());

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handleClick} className={css.button}>
        Log Out
      </button>
    </div>
  );
};
