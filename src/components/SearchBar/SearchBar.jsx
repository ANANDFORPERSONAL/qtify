import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import "./searchBar.css";
const SearchBar = () => {
  return (
    <>
      <div className="wrapper">
        <input className="search" />
        <button className="search-btn">
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
