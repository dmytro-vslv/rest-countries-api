import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Card.css";

const Card = props => {
	const { darkMode } = useContext(ThemeContext);
	const { flag, name, population, region, capital } = props;

	return (
		<li className={`card ${darkMode ? "card--dark" : ""}`}>
			<img className="card__flag" src={flag} alt={name} />

			<div className="card__info">
				<h3 className="card__title">{name}</h3>

				<p className="card__stat">
					Population:{" "}
					<span className="card__stat--light">
						{population.toLocaleString("en-US", { maximumFractionDigits: 2 })}
					</span>
				</p>

				<p className="card__stat">
					Region: <span className="card__stat--light">{region}</span>
				</p>

				<p className="card__stat">
					Capital: <span className="card__stat--light">{capital}</span>
				</p>
			</div>
		</li>
	);
};

export default Card;
