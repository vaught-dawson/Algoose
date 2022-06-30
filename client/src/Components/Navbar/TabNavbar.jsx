import React, { useState, useEffect } from "react";
import ProblemDesc from "../Problems/ProblemDesc";
import { Tabs, Tab } from "react-bootstrap";
import axios from "axios";
import "../../styles/tabStyle.css";

import SolutionPage from "../Problems/SolutionPage";

const TabNavbar = ({ mainAlgo = {}, timer = true }) => {
	const [isReady, setIsReady] = useState(false);
	const [key, setKey] = useState("description");
	const [algo, setAlgo] = useState(mainAlgo);

	// const getOne = async () => {
	// 	const response = await axios.get("http://localhost:8080/get/algo/17");
	// 	console.log(response.data);
	// 	return response.data;
	// };

	// useEffect(() => {
	// 	getOne().then(setAlgo);
	// }, []);

	useEffect(() => {
		setAlgo(mainAlgo);
	}, [mainAlgo]);

	const handleReadyState = (boolean) => {
		setIsReady(boolean);
	};

	return algo ? (
		<Tabs activeKey={key} className="d-flex" onSelect={(k) => setKey(k)}>
			<Tab
				eventKey="description"
				title="Description"
				className="h-100 bg-dark flex-fill rounded"
				tabClassName={key === "description" && "bg-dark"}
			>
				<ProblemDesc setReady={handleReadyState} isReady={isReady} algo={algo} timer={timer} />
			</Tab>
			{!isReady ? (
				<Tab eventKey="notReady" title="Solution" tabClassName="opacity-25" disabled>
					<SolutionPage algo={algo} />
				</Tab>
			) : (
				<Tab
					eventKey="notReady"
					title="Solution"
					className="bg-dark"
					tabClassName={key === "notReady" && "bg-dark"}
				>
					<SolutionPage algo={algo} />
				</Tab>
			)}
		</Tabs>
	) : (
		<h1>Loading...</h1>
	);
};

export default TabNavbar;
