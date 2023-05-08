import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalValues from "./Contexts/GlobalValues";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalValues>
			<App />
		</GlobalValues>
	</React.StrictMode>
);
