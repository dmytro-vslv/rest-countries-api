import { useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./NotFound.css";

const NotFound = () => {
	const { darkMode } = useContext(ThemeContext);
	const location = useLocation();
	const history = useHistory();

	const handleGoHome = () => {
		history.push("/");
	};

	return (
		<div className={`not-found ${darkMode ? "not-found--dark" : ""}`}>
			<h3 className="not-found__message">
				No match for <code className="not-found__path">{location.pathname}</code>
			</h3>

			<button className="not-found__button" onClick={handleGoHome}>
				Go Home
			</button>
		</div>
	);
};

export default NotFound;
