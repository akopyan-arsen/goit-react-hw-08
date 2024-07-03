import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../../redux/filter/slice";
import {
  selectFilterName,
  selectFilterNumber,
} from "../../redux/filter/selectors";
import { CheckIcon } from "../../images/icons";

const SearchBox = () => {
  const filterId = useId();
  const filterName = useSelector(selectFilterName);
  const filterNumber = useSelector(selectFilterNumber);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(filterContact(event.target.value));

  return (
    <div className={css.filterWrapper}>
      <label htmlFor={filterId} className={css.label}>
        Find contacts by name or number
      </label>
      <div className={css.inputWrapper}>
        <input
          type="text"
          value={filterName ?? filterNumber}
          id={filterId}
          onChange={handleChange}
          className={css.input}
        />

        <div className={css.svg}>
          <CheckIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
