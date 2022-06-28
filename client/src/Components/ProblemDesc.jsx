import React from "react";

const ProblemDesc = () => {
  const algo = {
    name: "TwoSum",
    description:
      "Given an array of integers, find two numbers such that they add up to a specific target number. \n\nThe function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.\n\nYou may assume that each input would have exactly one solution.",
    examples: [
      "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].",
      "Input: nums = [3,2,4], target = 6\nOutput: [1,2]",
      "Input: nums = [3,3], target = 6\nOutput: [0,1]",
    ],
  };

  return (
    <div className="bg-dark h-100 p-4 pt-2 pb-0">
      <h3>Daily Algo: {algo.name}</h3>
      <hr />
      <p className="mb-4 mt-4">
        {algo.description.split(/\n/).map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      {algo.examples.map((example, index) => {
        return (
          <div className="example">
            <h5>Example {index + 1}:</h5>
            <pre key={index} className="bg-black rounded p-2">
              <code>{example}</code>
            </pre>
          </div>
        );
      })}
    </div>
  );
};

export default ProblemDesc;
