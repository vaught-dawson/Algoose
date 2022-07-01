import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CodeEditor from "../Components/Code Editor/CodeEditor";
import CodeTester from "../Components/Code Editor/CodeTester";
import TabNavbar from "../Components/Navbar/TabNavbar";
import ProblemDesc from "../Components/Problems/ProblemDesc";
import SolutionPage from "../Components/Problems/SolutionPage";

const ProblemPage = ({}) => {
	const [algo, setAlgo] = useState(null);
	const [isReady, setIsReady] = useState(false);

	const handleReadyState = (boolean) => {
		setIsReady(boolean);
	};

	const getOne = async () => {
		const response = await axios.get("http://localhost:8080/get/algo/1");
		return response.data;
	};

	useEffect(() => {
		getOne().then(setAlgo);
	}, []);

	return (
		<>
			<div className="d-flex flex-row p-4 pb-0 gap-3">
				<div className="col-6 rounded">
					<TabNavbar>
						<ProblemDesc
							setReady={handleReadyState}
							isReady={isReady}
							algo={algo}
							timer={"true"}
							tabTitle="Descrip
							tion"
						/>
						<SolutionPage
							algo={algo}
							tabClass={!isReady ? "opacity-25" : ""}
							tabTitle="Solution"
							disabled={!isReady}
						/>
					</TabNavbar>
				</div>
				<div className="col-6 rounded" style={{ width: "calc(50% - 1em)" }}>
					{algo && <CodeEditor starterCode={algo.starterCode} />}
					{algo && <CodeTester testCases={algo.testCases} />}
				</div>
			</div>
		</>
	);
};

export default ProblemPage;
