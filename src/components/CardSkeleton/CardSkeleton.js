import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Shimmer from "../Shimmer/Shimmer";
import "./CardSkeleton.css";

const CardSkeleton = () => {
	const { darkMode } = useContext(ThemeContext);

	return (
		<li className={`card-skeleton ${darkMode ? "card-skeleton--dark" : ""}`}>
			<Shimmer className="card-skeleton__shimmer" />
			<div className="card-skeleton__flag"></div>
			<div className="card-skeleton__info">
				<div className="card-skeleton__title"></div>
				<div className="card-skeleton__stat"></div>
				<div className="card-skeleton__stat"></div>
				<div className="card-skeleton__stat"></div>
			</div>
		</li>
	);
};

export default CardSkeleton;
