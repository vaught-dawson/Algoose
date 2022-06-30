import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [algoInfo, setAlgoInfo] = useState();
    const [example, setExample] = useState();
    const navigate = useNavigate();

    const handleSubmit =  (e) => {
        e.preventDefault();
        exampleToArray()
        .then(
            axios
            .post("http://localhost:8080/add/algo", algoInfo)
            .then(() => navigate('/'))
            .catch()
        )
        
    };

    const exampleToArray = async () =>{
        let exampleArray = [];
        let lastSlice = 0;
        for (let i = 0; i <= example.length; i++) {
            if (example[i] == "," || i == example.length ) {
                exampleArray.push(example.slice(lastSlice, i));
                
                console.log(example.length)
                console.log("slicing at " + lastSlice +" to " + i)
                console.log(exampleArray)
                lastSlice = i + 1;
            }
            
        }
        setAlgoInfo({...algoInfo, "examples": exampleArray})
    }

    const handleExample = (e) => {
        setExample(e.target.value);
    };

    const handleChange = (e) => {
        setAlgoInfo({ ...algoInfo, [e.target.name]: e.target.value });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <label htmlFor="algoName" className="col-sm-4 col-form-label">
                    Title of algo:
                </label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="algoName" name="name" onChange={handleChange} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="description" className="col-sm-4 col-form-label">
                    description:
                </label>
                <div className="col-8">
                    <textarea id="description" cols="120" rows="2" name="description" onChange={handleChange}></textarea>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="example" className="col-sm-4 col-form-label">
                    Examples: <p className="bold">^ separate by commas and no spaces. (ex = "this is example one,this is example 2")</p>
                </label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="example" name="example" onChange={handleExample} />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="solution" className="col-sm-4 col-form-label">
                    solution:
                </label>
                <div className="col-sm-8">
                    <input type="solution" className="form-control" id="solution" name="solution" onChange={handleChange} />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Cancel
                </button>
                <input type="submit" value="algo time" className="btn btn-primary" data-bs-dismiss="modal" />
            </div>
        </form>
    );
};

export default Admin;
