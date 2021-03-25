import React from "react";

const HomePage: React.FC = () => {
	return (
		<div>
			{Array.from({ length: 5 }).map((_e, i) => (
				<img
					key={i}
					src={`https://source.unsplash.com/collection/${i}`}
					alt="random-images"
				/>
			))}
		</div>
	);
};

export default HomePage;
