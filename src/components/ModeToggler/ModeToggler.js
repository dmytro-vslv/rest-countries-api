import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import "./ModeToggler.css";

const ModeToggler = () => {
	const { darkMode, toggleDarkMode } = useContext(ThemeContext);

	return (
		<label className={`mode-toggler ${darkMode ? "mode-toggler--dark" : ""}`} htmlFor="darkMode">
			<input
				className="mode-toggler__input"
				type="checkbox"
				id="darkMode"
				checked={darkMode}
				onChange={toggleDarkMode}
			/>
			<Brightness3Icon className="mode-toggler__icon" />
			Dark mode
		</label>
	);
};

export default ModeToggler;
