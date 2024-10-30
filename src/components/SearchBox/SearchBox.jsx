import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectedNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectedNameFilter);

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <p className={s.text}>Find contacts by name</p>
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={handleSearch}
          placeholder="Enter name..."
          aria-label="Search contacts"
        />
      </label>
    </div>
  );
};

export default SearchBox;
