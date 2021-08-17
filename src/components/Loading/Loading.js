import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Loading.css";

const Loading = () => {
	const { darkMode } = useContext(ThemeContext);

	return <h3 className={`loading ${darkMode ? "loading--dark" : ""}`}>Loading...</h3>;
};

export default Loading;
