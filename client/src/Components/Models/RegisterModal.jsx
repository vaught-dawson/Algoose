import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const LoginModal = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [userInfo, setUserInfo] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/register/user", userInfo)
            .then((res) => {
                if(res.data.hasOwnProperty("errors")){
                    setError(res.data.errors)
                } else {
                    handleClose();
                    sessionStorage.setItem("uuid", res.data.id)
                    window.location.reload(false);
                }
            })
            .catch((err) => {
                const err_Res = err.response.data.details;
                setError(err_Res);
            });
    };

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Button variant="primary" size="sm" onClick={handleShow}>
                Register
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome! Register your account:</Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                        {error && error.map((err, i) => <p key={i}>{err}</p>)}
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
                                <input type="text" className="form-control" id="email" name="email" onChange={handleChange} />
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
                            <input type="submit" value="Register" className="btn btn-primary" data-bs-dismiss="modal" />
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default LoginModal;
