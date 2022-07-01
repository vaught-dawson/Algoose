import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CodeEditor from "../Components/Code Editor/CodeEditor";
import TabNavbar from "../Components/Navbar/TabNavbar";

const ProblemPage = ({}) => {
	const [algo, setAlgo] = useState(null);

	const getOne = async () => {
		const response = await axios.get("http://localhost:8080/get/algo/19");
		return response.data;
	};

	useEffect(() => {
		getOne().then(setAlgo);
	}, []);

	return (
		<>
			<div className="d-flex flex-row p-4 pb-0 gap-3">
				<div className="col-6 rounded">
					<TabNavbar mainAlgo={algo} />
				</div>
				<div className="col-6 rounded" style={{ width: "calc(50% - 1em)" }}>
					<CodeEditor />
				</div>
			</div>
		</>
	);
};

export default ProblemPage;
