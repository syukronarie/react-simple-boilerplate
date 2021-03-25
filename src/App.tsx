import "./globalStyle.scss";

import React, { Suspense } from "react";
import Helmet from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";

import loadable from "@loadable/component";

const AppRoutes = loadable(() => import("./routers/Routers"));

const NavbarDekstop = loadable(
	() => import("./components/navbar/NavbarDekstop")
);
const App: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Simple React Boiler Plate | Journey App</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Router>
				<Suspense fallback="">
					<NavbarDekstop />
					<AppRoutes />
				</Suspense>
			</Router>
		</>
	);
};

export default App;
