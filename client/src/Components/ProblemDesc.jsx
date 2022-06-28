import React from "react";

const ProblemDesc = () => {
  const algo = {
    name: "TwoSum",
    description:
      "Given an array of integers, find two numbers such that they add up to a specific target number. \n\nThe function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.\n\nYou may assume that each input would have exactly one solution.",
    examples: [""],
  };

  return (
    <div className="bg-dark h-100 p-4 pt-2 pb-0">
      <h3>Daily Algo: {algo.name}</h3>
      <hr />
      <p>
        {algo.description.split(/\n/).map((line) => (
          <React.Fragment key={line}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default ProblemDesc;
