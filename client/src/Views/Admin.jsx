import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TabNavbar from "../Components/Navbar/TabNavbar";
import { useEffect } from "react";

const Admin = () => {
	const [algoInfo, setAlgoInfo] = useState({ title: "", description: "", solution: "" });
	const [exampleArr, setExampleArr] = useState([]);
	const [exampleInput, setExampleInput] = useState("");
	const [algo, setAlgo] = useState({ ...algoInfo, examples: exampleArr || [] } || null);
	const navigate = useNavigate();

	useEffect(() => {
		setAlgo({ ...algoInfo, examples: exampleArr });
	}, [algoInfo, exampleArr]);

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
		setExampleArr([...exampleArr, exampleInput], setExampleInput(""));
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
					<TabNavbar mainAlgo={algo} timer={false} />
				</div>
			</div>
		</>
	);
};

export default Admin;
