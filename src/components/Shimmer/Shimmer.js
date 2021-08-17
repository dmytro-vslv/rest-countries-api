import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Shimmer.css";

const Shimmer = ({ className }) => {
	const { darkMode } = useContext(ThemeContext);

	return (
		<div className={`${className} shimmer ${darkMode ? "shimmer--dark" : ""}`}>
			<div className="shimmer__shine"></div>
		</div>
	);
};

export default Shimmer;
