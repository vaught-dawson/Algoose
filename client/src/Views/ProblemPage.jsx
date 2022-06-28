import React from "react";
import CodeEditor from "../Components/Code Editor/CodeEditor";
import ProblemDesc from "../Components/ProblemDesc";
const ProblemPage = () => {
  return (
    <div className="d-flex flex-row p-4 pb-0 gap-3">
      <div className="col-6 border border-dark rounded">
        <ProblemDesc />
      </div>
      <div
        className="col-6 border border-dark rounded"
        style={{ width: "calc(50% - 1em)" }}
      >
        <CodeEditor />
      </div>
    </div>
  );
};

export default ProblemPage;
