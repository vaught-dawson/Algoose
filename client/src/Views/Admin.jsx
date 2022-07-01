import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TabNavbar from "../Components/Navbar/TabNavbar";
import { useEffect } from "react";
import ProblemDesc from "../Components/Problems/ProblemDesc";
import SolutionPage from "../Components/Problems/SolutionPage";
import ViewTestCases from "../Components/ViewTestCases";

const Admin = () => {
	const [algoInfo, setAlgoInfo] = useState({ title: "", description: "", solution: "", starterCode: "" });
	const [exampleInput, setExampleInput] = useState("");
	const [exampleArr, setExampleArr] = useState([]);
	const [argsCount, setArgsCount] = useState(1);
	const [testCaseInputs, setTestCaseInputs] = useState({});
	const [testCaseOutput, setTestCaseOutput] = useState("");
	const [testCaseArr, setTestCaseArr] = useState([]);
	const [algo, setAlgo] = useState({ ...algoInfo, examples: exampleArr || [], testCases: testCaseArr || [] } || null);
	const navigate = useNavigate();

	useEffect(() => {
		setAlgo({ ...algoInfo, examples: exampleArr, testCases: testCaseArr });
		setExampleInput("");
		setTestCaseOutput("");

		let newTestCaseInputs = {};
		for (let i = 0; i < argsCount; i++) {
			newTestCaseInputs[i] = "";
		}
		setTestCaseInputs(newTestCaseInputs);
	}, [algoInfo, exampleArr, testCaseArr]);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8080/add/algo", algo)
			.then(() => navigate("/"))
			.catch();
	};

	const handleExample = (e) => {
		e.preventDefault();
		setExampleInput(e.target.value);
	};

	const handleChange = (e) => {
		setAlgoInfo({ ...algoInfo, [e.target.name]: e.target.value });
	};

	const handleExampleSubmit = (e) => {
		e.preventDefault();
		setExampleArr([...exampleArr, exampleInput]);
	};

	const handleTestCaseSubmit = (e) => {
		e.preventDefault();
		let inputsArray = [];
		for (let index in testCaseInputs) {
			inputsArray.push(testCaseInputs[index]);
		}
		setTestCaseArr([...testCaseArr, [inputsArray, testCaseOutput]]);
	};

	const getInputFields = () => {
		let fields = [];
		for (let i = 0; i < argsCount; i++) {
			fields.push(
				<div className="col-sm-2">
					<input
						className="form-control col-sm-2"
						id={i}
						name={i}
						onChange={(e) => setTestCaseInputs({ ...testCaseInputs, [e.target.id]: e.target.value })}
						value={testCaseInputs[i]}
					/>
				</div>
			);
		}
		return fields;
	};

	return (
		<>
			<div className="d-flex flex-row p-4 pb-0 gap-3">
				<div className="col-6 rounded">
					<form onSubmit={handleSubmit}>
						<div className="row mb-3">
							<label htmlFor="algoName" className="col-sm-4 col-form-label">
								Title of algo:
							</label>
							<div className="col-sm-8">
								<input
									type="text"
									className="form-control"
									id="algoName"
									name="title"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="row mb-3">
							<label htmlFor="description" className="col-sm-4 col-form-label">
								Description:
							</label>
							<div className="col-8">
								<textarea
									id="description"
									cols="67"
									rows="2"
									name="description"
									onChange={handleChange}
									className="p-2"
								/>
							</div>
						</div>
						<div className="row mb-3">
							<label htmlFor="starterCode" className="col-sm-4 col-form-label">
								Starter Code:
							</label>
							<div className="col-sm-8">
								<textarea
									id="starterCode"
									cols="67"
									rows="2"
									name="starterCode"
									onChange={handleChange}
									className="p-2"
								/>
							</div>
						</div>
						<div className="row mb-3">
							<label htmlFor="solution" className="col-sm-4 col-form-label">
								Solution:
							</label>
							<div className="col-sm-8">
								<textarea
									id="solution"
									cols="67"
									rows="2"
									name="solution"
									onChange={handleChange}
									className="p-2"
								/>
							</div>
						</div>
						<div className="row mb-3">
							<label htmlFor="example" className="col-sm-4 col-form-label">
								Examples:
							</label>
							<div className="col-sm-5 d-flex align-items-center">
								<textarea
									id="example"
									cols="40"
									rows="2"
									name="example"
									onChange={handleExample}
									value={exampleInput}
									className="p-2"
								/>
							</div>
							<button className="col-sm-2 h-100" onClick={handleExampleSubmit}>
								Add Example
							</button>
						</div>
						<div className="row mb-3">
							<label htmlFor="argumentCount" className="col-sm-4 col-form-label">
								Argument Count:
							</label>
							<div className="col-sm-5 d-flex align-items-center">
								<input
									type="number"
									className="form-control"
									id="algoArgumentCount"
									name="argumentCount"
									onChange={(e) => setArgsCount(parseInt(e.target.value))}
									value={argsCount}
								/>
							</div>
						</div>
						<div className="row mb-3">
							<label htmlFor="testCases" className="col-sm-4 col-form-label">
								Test Case Inputs:
							</label>
							{getInputFields()}
						</div>
						<div className="row mb-3">
							<label htmlFor="testCaseOutput" className="col-sm-4 col-form-label">
								Test Case Output:
							</label>
							<div className="col-sm-2">
								<input
									className="form-control col-sm-2"
									id={testCaseOutput}
									name={testCaseOutput}
									onChange={(e) => setTestCaseOutput(e.target.value)}
									value={testCaseOutput}
								/>
							</div>
						</div>
						<button className="col-sm-2 h-100" onClick={handleTestCaseSubmit}>
							Add a Test Case
						</button>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
								onClick={() => navigate("/")}
							>
								Cancel
							</button>
							<input
								type="submit"
								value="Create Algo"
								className="btn btn-primary"
								data-bs-dismiss="modal"
							/>
						</div>
					</form>
				</div>
				<div className="col-6 rounded" style={{ width: "calc(50% - 1em)" }}>
					<TabNavbar>
						<ProblemDesc
							setReady={() => null}
							isReady={true}
							algo={algo}
							timer={false}
							tabTitle="Description"
						/>
						<SolutionPage algo={algo} tabTitle="Solution" />
						<ViewTestCases testCases={algo.testCases} tabTitle="Test Cases" />
					</TabNavbar>
				</div>
			</div>
		</>
	);
};

export default Admin;
