import "./globalStyle.scss";

import React from "react";

const App = () => {
	return (
		<div>
			<h1>Hello world</h1>
			<h5>Simple Boiler Plate</h5>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
					quia, nisi illo earum velit error! Perferendis quae id quis. Saepe
					architecto nam suscipit cumque debitis. Recusandae quibusdam ab quos
					similique.
				</p>
				{/* {Array.from({ length: 1 }).map((_e, i) => (
					<img
						src={`https://source.unsplash.com/collection/${i}`}
						alt="random-images"
					/>
				))} */}
			</div>
		</div>
	);
};

export default App;
