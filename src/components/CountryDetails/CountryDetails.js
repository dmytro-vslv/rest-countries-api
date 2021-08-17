import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import "./CountryDetails.css";

const CountryDetails = ({ match }) => {
	const { darkMode } = useContext(ThemeContext);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(true);
	const [country, setCountry] = useState([]);
	const [borders, setBorders] = useState([]);

	//Fetch country details and its borders
	useEffect(() => {
		setLoading(true);
		setError(false);

		const fetchCountry = async () => {
			try {
				const response = await fetch(
					`https://restcountries.eu/rest/v2/name/${match.params.country}?fullText=true`
				);
				const country = await response.json();
				setCountry(country);

				//FETCH COUNTRY BORDERS
				const borderNames = await Promise.all(
					country[0].borders.map(async border => {
						const response = await fetch(`https://restcountries.eu/rest/v2/alpha?codes=${border}`);
						const countryBorders = await response.json();
						return countryBorders[0].name;
					})
				);
				setBorders(borderNames);
			} catch (error) {
				console.log(error);
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		fetchCountry();
	}, [match.params.country]);

	if (loading) return <Loading />;
	if (error) return <Error />;

	return (
		<div className={`country-details ${darkMode ? "country-details--dark" : ""} container`}>
			<Link className="country-details__link" to="/">
				<KeyboardBackspaceIcon className="country-details__icon" />
				Back
			</Link>

			<div className="country-details__content">
				<img className="country-details__flag" src={country[0]?.flag} alt={country[0]?.name} />

				<div className="country-details__info">
					<h3 className="country-details__title">{country[0]?.name}</h3>

					<div className="country-details__info-group country-details__info-group--one">
						<p className="country-details__stat">
							Native Name: <span className="country-details__stat--light">{country[0]?.nativeName}</span>
						</p>

						<p className="country-details__stat">
							Population:{" "}
							<span className="country-details__stat--light">
								{country[0]?.population.toLocaleString("en-US", { maximumFractionDigits: 2 })}
							</span>
						</p>

						<p className="country-details__stat">
							Region: <span className="country-details__stat--light">{country[0]?.region}</span>
						</p>

						<p className="country-details__stat">
							Sub Region: <span className="country-details__stat--light">{country[0]?.subregion}</span>
						</p>

						<p className="country-details__stat">
							Capital: <span className="country-details__stat--light">{country[0]?.capital}</span>
						</p>
					</div>

					<div className="country-details__info-group country-details__info-group--two">
						<p className="country-details__stat">
							Top Level Domain: <span className="country-details__stat--light">.be</span>
						</p>

						<p className="country-details__stat">
							Currencies:{" "}
							<span className="country-details__stat--light">{country[0]?.currencies[0].name}</span>
						</p>

						<p className="country-details__stat">
							Languages:{" "}
							{country[0]?.languages.map((language, i, languages) => (
								<span className="country-details__stat--light" key={language.name}>
									{`${language.name}${i !== languages.length - 1 ? ", " : ""}`}
								</span>
							))}
						</p>
					</div>

					{!!borders.length && (
						<div className="country-details__info-group country-details__info-group--three">
							<h4 className="country-details__stat">Border Countries:</h4>
							<ul className="country-details__borders">
								{borders.map(border => (
									<Link className="country-details__border" to={`/${border}`} key={border}>
										{border}
									</Link>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CountryDetails;
