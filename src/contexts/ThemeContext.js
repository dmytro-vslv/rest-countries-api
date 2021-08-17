import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(() => {
		const sessionData = sessionStorage.getItem("darkMode");
		return sessionData ? JSON.parse(sessionData) : true;
	});

	useEffect(() => {
		sessionStorage.setItem("darkMode", JSON.stringify(darkMode));
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(prevState => !prevState);
	};

	return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};
