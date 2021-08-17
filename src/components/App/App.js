import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import Header from "../Header/Header";
import Home from "../Home/Home";
import CountryDetails from "../CountryDetails/CountryDetails";
import NotFound from "../NotFound/NotFound";
import "./App.css";

const App = () => {
	const { darkMode } = useContext(ThemeContext);

	return (
		<div className={`app ${darkMode ? "app--dark" : ""}`}>
			<Header />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/:country" component={CountryDetails} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};

export default App;
