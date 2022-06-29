import React, { useState } from "react";
import ProblemDesc from "../Problems/ProblemDesc";
import { Tabs, Tab } from "react-bootstrap";

import "../../styles/tabStyle.css";

import SolutionPage from "../Problems/SolutionPage";

const TabNavbar = () => {
	const [isReady, setIsReady] = useState(false);
	const [key, setKey] = useState("description");

	const handleReadyState = (boolean) => {
		setIsReady(boolean);
	};

	return (
		<Tabs activeKey={key} className="d-flex" onSelect={(k) => setKey(k)}>
			<Tab
				eventKey="description"
				title="Description"
				className="h-100 bg-dark flex-fill rounded"
				tabClassName={key === "description" && "bg-dark"}
			>
				<ProblemDesc setReady={handleReadyState} isReady={isReady} />
			</Tab>
			{!isReady ? (
				<Tab eventKey="notReady" title="Solution" tabClassName="opacity-25" disabled>
					<SolutionPage />
				</Tab>
			) : (
				<Tab
					eventKey="notReady"
					title="Solution"
					className="bg-dark"
					tabClassName={key === "notReady" && "bg-dark"}
				>
					<SolutionPage />
				</Tab>
			)}
		</Tabs>
	);
};

export default TabNavbar;
