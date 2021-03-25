import React from "react";
import ReactDOM from "react-dom";

import loadable from "@loadable/component";

const App = loadable(() => import("./App"));

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
