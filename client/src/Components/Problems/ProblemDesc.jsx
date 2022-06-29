import React, { useEffect, useState } from "react";
import CountDownTimer from "../Countdown/CountDownTimer";
import axios from "axios";

const ProblemDesc = (props) => {
	const [algo, setAlgo] = useState()
	const oneHour = 0.1 * 60 * 1000;
	const now = new Date().getTime();
	const timeTill1hour = now + oneHour;

	const getOne = async () =>{
		const response = await axios.get("http://localhost:8080/get/algo/3")
		return response.data;
	}


	useEffect(() =>{
		getOne()
			.then(setAlgo);
	}, [])

	return algo ? (
		<div className="bg-dark p-4 container-fluid rounded border-none">
			<h3>Daily Algo: {algo.name}</h3>
			{!props.isReady && <CountDownTimer targetDate={timeTill1hour} setReady={props.setReady} />}
			<hr />
			<p className="mb-4 mt-4">
				{algo.description.split(/\n/).map((line, index) => (
					<React.Fragment key={index}>
						{line}
						<br />
					</React.Fragment>
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
		<h1>Loading...</h1>
	);
};

export default ProblemDesc;
