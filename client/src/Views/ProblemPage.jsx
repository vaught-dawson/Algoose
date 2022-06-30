import React from "react";
import CodeEditor from "../Components/Code Editor/CodeEditor";
import TabNavbar from "../Components/Navbar/TabNavbar";

const ProblemPage = () => {
	
	return (
		<>
			<div className="d-flex flex-row p-4 pb-0 gap-3">
				<div className="col-6 rounded">
					<TabNavbar />
				</div>
				<div className="col-6 rounded" style={{ width: "calc(50% - 1em)" }}>
					<CodeEditor />
				</div>
			</div>
		</>
	);
};

export default ProblemPage;
