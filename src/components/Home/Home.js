import { useContext } from "react";
import { CountryContext } from "../../contexts/CountryContext";
import Controls from "../Controls/Controls";
import CardList from "../CardList/CardList";
import Error from "../Error/Error";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./Home.css";

const Home = () => {
	const { error } = useContext(CountryContext);

	return (
		<div className="home container">
			<Controls />

			{!error && <CardList />}

			{error && <Error />}

			<ScrollToTop className="home__scroll" />
		</div>
	);
};

export default Home;
