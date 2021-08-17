import { useContext } from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "../../contexts/CountryContext";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = () => {
	const { loading, filteredCountries } = useContext(CountryContext);
	const skeletonCards = [...Array(8)];

	if (loading) {
		return (
			<ul className="card-list">
				{skeletonCards.map((_, i) => (
					<CardSkeleton key={i} />
				))}
			</ul>
		);
	} else {
		return (
			<ul className="card-list">
				{filteredCountries.map(country => (
					<Link to={`/${country.name}`} key={country.name}>
						<Card {...country} />
					</Link>
				))}
			</ul>
		);
	}
};

export default CardList;
