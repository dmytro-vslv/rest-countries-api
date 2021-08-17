import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "./ScrollToTop.css";

const ScrollToTop = ({ className }) => {
	const { darkMode } = useContext(ThemeContext);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			className={`${className} scroll-to-top ${isVisible ? "scroll-to-top--visible" : ""} ${
				darkMode ? "scroll-to-top--dark" : ""
			}`}
			onClick={handleScrollToTop}
		>
			<KeyboardArrowUpIcon />
		</button>
	);
};

export default ScrollToTop;
