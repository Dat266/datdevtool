import { useContext } from "react";
import "./App.css";
import Header from "./Layouts/Header/Header";
import ValuesContext from "./Contexts/ContextInstace";
import Icons from "./Components/Icons/Icons";

function App() {
	const { contextHolder } = useContext(ValuesContext);
	return (
		<div className="App">
			{contextHolder}
			<Header />
		</div>
	);
}

export default App;
