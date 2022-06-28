import React from "react";

const CodeSubmitButton = () => {
	const testCode = () => {
		const args = [[0, 1], 1];

		const codeFunction = Function(
			"args",
			`const f = ${getCodeFromEditor()};\nreturn f(${dynamicallySetArgs(args)})`
		);

		alert(codeFunction(args));
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

	return <button onClick={testCode}>Submit</button>;
};

export default CodeSubmitButton;
