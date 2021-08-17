import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import ModeToggler from "../ModeToggler/ModeToggler";
import "./Header.css";

const Header = () => {
	const { darkMode } = useContext(ThemeContext);

	return (
		<header className={`header ${darkMode ? "header--dark" : ""}`}>
			<div className="header__content container">
				<Link className="header__logo" to="/">
					Where in the world?
				</Link>

				<ModeToggler />
			</div>
		</header>
	);
};

export default Header;
