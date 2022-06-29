import React, { useEffect, useState } from "react";

const SolutionPage = () => {
	const [solution, setSolution] = useState();

	useEffect(() => {
		setSolution({
			name: "Two Sum",
			solution: `function twoSum(nums, target) {
                let map = {};
                let output = [];
                for(let i = 0; i < nums.length; i++){
                    let sum = target - nums[i];
                    if(map.hasOwnProperty(sum)){
                        output.push(map[sum])
                        output.push(i)
                        return output ;
                    }
                    map[nums[i]] = i;
                }
            };`,
		});
	}, []);

	return solution ? (
		<div className="p-4">
			<h3>Solution for: {solution.name}</h3>
			<hr />
			<pre className="bg-black p-2 rounded">
				<code className="mt-3 text-primary">{solution.solution}</code>
			</pre>
		</div>
	) : (
		<h1>Loading....</h1>
	);
};

export default SolutionPage;
