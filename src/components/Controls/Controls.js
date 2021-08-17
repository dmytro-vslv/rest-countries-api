import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import "./Controls.css";

const Controls = () => {
	return (
		<div className="controls">
			<Search />
			<Filter />
		</div>
	);
};

export default Controls;
