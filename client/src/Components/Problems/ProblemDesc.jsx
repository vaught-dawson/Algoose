import React, { useEffect, useState } from "react";
import CountDownTimer from "../Countdown/CountDownTimer";

const ProblemDesc = (props) => {
	const [algo, setAlgo] = useState(props.algo);
	const oneHour = 0.1 * 60 * 1000;
	const now = new Date().getTime();
	const timeTill1hour = now + oneHour;

	useEffect(() => {
		setAlgo(props.algo);
	}, [props.algo]);

	if (!props.timer) {
		props.setReady(true);
	}


	return algo ? (
		<div className="bg-dark p-4 rounded border-none overflow-scroll mvh-80 no-scrollbar">
			<h3>Daily Algo: {algo.title}</h3>
			{props.timer && !props.isReady && <CountDownTimer targetDate={timeTill1hour} setReady={props.setReady} />}
			<hr />
			<p className="mb-4 mt-4">
				{algo.description.split(/\n/).map((line, index) => (
					<>
						<span key={index}>
							{line}
							<br />
						</span>
					</>
				))}
			</p>

			{algo.examples.map((example, index) => {
				return (
					<div className="example">
						<h5>Example {index + 1}:</h5>
						<pre key={index} className="bg-black rounded p-2">
							<code>{example}</code>
						</pre>
					</div>
				);
			})}
		</div>
	) : (
		<h1 className="p-4">Loading...</h1>
	);
};

export default ProblemDesc;
