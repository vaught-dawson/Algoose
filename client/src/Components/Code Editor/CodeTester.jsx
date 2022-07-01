import React, { useState } from "react";

const CodeTester = ({ testCases = [] }) => {
	const [testResults, setTestResults] = useState([]);

	const getCodeFunction = () => {
		const codeFunction = Function(
			"args",
			`const f = ${getCodeFromEditor()};\nreturn f(${dynamicallySetArgs(testCases[0])})`
		);

		return codeFunction;
	};

	const getCodeFromEditor = () => {
		let codeEditor = document.querySelector(".cm-content");
		let code = "";

		codeEditor.childNodes.forEach((child) => {
			code += child.textContent + "\n";
		});

		return code;
	};

	const dynamicallySetArgs = (args) => {
		let argsNumString = "";

		for (let i in args) {
			argsNumString += `args[${i}],`;
		}

		return argsNumString;
	};

	// const parseNumbers = (args) => {
	//     let output = []
	//     for (let arg in args) {
	//         for (let i = 0; i < args[arg].length; i++) {
	//             if (isNaN(args[arg][i])) {
	//                 output[arg][i]
	//             }
	//         }
	//     }
	// }

	const parseArgs = (args) => {
		let newArgs = [];
		for (let arg of args) {
			let newArg = [];
			for (let i = 0; i < arg.length; i++) {
				if (!isNaN(arg[i])) {
					newArg.push(parseInt(arg[i]));
				}
			}
			newArgs.push(newArg);
		}
		return newArgs;
	};

	const handleCodeTests = () => {
		const userFunction = getCodeFunction();
		let newResults = [];

		for (let test of testCases) {
			newResults = [...newResults, JSON.stringify(userFunction(parseArgs(test[0])))];
		}

		setTestResults(newResults);
	};

	return (
		<div className="bg-dark p-4 rounded border-none overflow-scroll mt-3 no-scrollbar mh-50">
			<table className="w-100 table table-striped table-dark">
				<thead>
					<tr>
						<th scope="col">Input</th>
						<th scope="col">Expected Output</th>
						<th scope="col">Received Output</th>
						<th scope="col">Result</th>
					</tr>
				</thead>
				<tbody>
					{testCases.map((test, index) => {
						return (
							<tr key={index}>
								<td>{test[0].join(", ")}</td>
								<td>{test[1]}</td>
								<td>{testResults[index]}</td>
								<td className={testResults[index] == test[1] ? "text-success" : "text-danger"}>
									{testResults[index] == test[1] ? "Passed" : "Failed"}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="submit-button d-flex justify-content-end">
				<button className="btn btn-primary" onClick={handleCodeTests}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default CodeTester;
