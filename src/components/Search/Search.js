import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CountryContext } from "../../contexts/CountryContext";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import "./Search.css";

const Search = () => {
	const { darkMode } = useContext(ThemeContext);
	const { search, handleSearch, handleClearSearch } = useContext(CountryContext);

	return (
		<div className={`search ${darkMode ? "search--dark" : ""}`}>
			<SearchIcon className="search__icon search__icon--search" />
			<input
				className="search__input"
				type="text"
				placeholder="Search for a country…"
				value={search}
				onChange={handleSearch}
			/>
			{search && <ClearIcon className="search__icon search__icon--clear" onClick={handleClearSearch} />}
		</div>
	);
};

export default Search;
