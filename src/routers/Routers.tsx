import React from "react";
import { Route, Switch } from "react-router-dom";

import loadable from "@loadable/component";

const HomePage = loadable(() => import("../components/pages/home/HomePage"));

const AppRoutes: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
		</Switch>
	);
};

export default AppRoutes;
