import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");

	useEffect(() => {
		const fetchCountries = async () => {
			setLoading(true);
			setError(false);

			try {
				const response = await fetch("https://restcountries.eu/rest/v2/all");
				const countries = await response.json();
				setCountries(countries);
			} catch (error) {
				console.log(error);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchCountries();
	}, []);

	const handleSearch = e => {
		setSearch(e.target.value);
	};

	const handleClearSearch = () => {
		setSearch("");
	};

	const handleSelectRegion = e => {
		if (e.target.getAttribute("data-name") === filter) return setFilter("");
		setFilter(e.target.getAttribute("data-name"));
	};

	const searchedCountries = search
		? countries.filter(country => {
				if (country.name.toLowerCase().includes(search.trim().toLowerCase())) {
					return country;
				} else {
					return null;
				}
		  })
		: countries;

	const filteredCountries = filter
		? searchedCountries.filter(country => country.region === filter)
		: searchedCountries;

	return (
		<CountryContext.Provider
			value={{
				loading,
				error,
				countries,
				filteredCountries,
				search,
				filter,
				handleSearch,
				handleClearSearch,
				handleSelectRegion,
			}}
		>
			{children}
		</CountryContext.Provider>
	);
};
