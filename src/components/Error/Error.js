import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Error.css"

const Error = () => {
  const { darkMode } = useContext(ThemeContext);
  return <h3 className={`error ${darkMode ? "error--dark" : ""}`}>Something went wrong. Please try again later.</h3> 
}

export default Error
