import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

// import ImageDetail from "src/components/pages/ImageDetail/ImageDetailPage";
// import ImageHomePage from "../components/pages/ImageHome/ImageHomePage";

const HomePage = lazy(() => import("../components/pages/home/HomePage"));

const AppRoutes: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
		</Switch>
	);
};

export default AppRoutes;
