import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CountryProvider } from "./contexts/CountryContext";
import App from "./components/App/App";
import "./index.css";

ReactDOM.render(
	<Router>
		<ThemeProvider>
			<CountryProvider>
				<App />
			</CountryProvider>
		</ThemeProvider>
	</Router>,
	document.getElementById("root")
);
