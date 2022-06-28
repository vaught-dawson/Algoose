import React from 'react'
import CodeEditor from '../Components/Code Editor/CodeEditor'
import ProblemDesc from "../Components/ProblemDesc"
const ProblemPage = () => {
  return (
    <div className='d-flex flex-row p-4'>
        <div className="col-6 border border-dark"><ProblemDesc /></div>
        <div className="col-6 border border-dark"><CodeEditor /> </div>
    </div>
  )
}

export default ProblemPage