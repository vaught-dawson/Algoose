import React, { useState } from "react";
import "bootstrap";
import axios from "axios";

const RegisterModel = () => {
    const [userInfo, setUserInfo] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
		console.log("submitted")
        axios
            .post("http://localhost:8080/add/user", userInfo)
            .then((res) => sessionStorage.setItem("uuid", res.data._id))
            .catch();
    };
    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    return (
        <div className="modal fade" id="registerModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Welcome! Register your account:</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <label htmlFor="userName" className="col-sm-4 col-form-label">
                                    Username:
                                </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="userName" name="userName" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="email" className="col-sm-4 col-form-label">
                                    Email:
                                </label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="password" className="col-sm-4 col-form-label">
                                    Password:
                                </label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="password" name="password" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="conPassword" className="col-sm-4 col-form-label">
                                    Confirm Password:
                                </label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="conPassword" name="confirmPassword" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <input type="submit" value="Register" className="btn btn-primary"  data-bs-dismiss="modal"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModel;
