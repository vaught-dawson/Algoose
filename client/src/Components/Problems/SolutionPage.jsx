import React, { useEffect, useState } from "react";

const SolutionPage = (props) => {
	const [algo, setAlgo] = useState(props.algo);

	useEffect(() => {
		setAlgo(props.algo);
	}, [props.algo]);

	return algo ? (
		<div className="p-4">
			<h3>Solution for: {algo.name}</h3>
			<hr />
			<pre className="bg-black p-2 rounded">
				<code className="mt-3 text-primary">{algo.solution}</code>
			</pre>
		</div>
	) : (
		<h1>Loading....</h1>
	);
};

export default SolutionPage;
