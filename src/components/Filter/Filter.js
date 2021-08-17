import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CountryContext } from "../../contexts/CountryContext";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "./Filter.css";

const Filter = () => {
	const { darkMode } = useContext(ThemeContext);
	const { countries, filter, handleSelectRegion } = useContext(CountryContext);
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const regions = countries.map(country => country.region);
	const uniqueRegions = [...new Set(regions)].filter(region => region !== "");

	useEffect(() => {
		setMenuIsOpen(false);
	}, [filter]);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
	}, []);

	const handleClickOutside = e => {
		if (!e.target.classList.contains("filter__region") && !e.target.classList.contains("filter__toggler"))
			setMenuIsOpen(false);
	};

	const handleToggleMenu = () => {
		setMenuIsOpen(prevState => !prevState);
	};

	return (
		<div className={`filter ${darkMode ? "filter--dark" : ""}`}>
			<div className="filter__toggler" onClick={handleToggleMenu}>
				{filter ? filter : "Filter by Region"}
				{menuIsOpen ? (
					<KeyboardArrowUpIcon className="filter__icon" />
				) : (
					<KeyboardArrowDownIcon className="filter__icon" />
				)}
			</div>

			<ul className={`filter__menu ${menuIsOpen ? "filter__menu--open" : ""}`}>
				{uniqueRegions.map(uniqueRegion => (
					<li
						className="filter__region"
						data-name={uniqueRegion}
						key={uniqueRegion}
						onClick={handleSelectRegion}
					>
						{uniqueRegion}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Filter;
