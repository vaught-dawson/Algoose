import React from "react";

const ViewTestCases = ({ testCases = [[], []] }) => {
	return (
		<div className="bg-dark p-4 rounded border-none overflow-scroll mvh-80 no-scrollbar">
			<h3>Test Cases:</h3>
			<hr />
			<table className="w-100 table table-striped table-dark">
				<thead>
					<tr>
						<th scope="col">Input</th>
						<th scope="col">Expected Output</th>
					</tr>
				</thead>
				<tbody>
					{testCases.map((test, index) => {
						return (
							<tr key={index}>
								<td>{JSON.stringify(test[0])}</td>
								<td>{JSON.stringify(test[1])}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default ViewTestCases;
