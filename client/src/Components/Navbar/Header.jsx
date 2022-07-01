import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactComponent as PaperCrane } from "../../assets/Images/paperCrane.svg";
import "../../styles/style.css";
import { Link } from "react-router-dom";

import RegisterModal from "../Models/RegisterModal";

import LoginModal from "../Models/LoginModal";
const Header = () => {
    const [user, setUser] = useState();


    useEffect(() => {
        axios.get(`http://localhost:8080/get/user/${sessionStorage.getItem("uuid")}`).then((res) => setUser(res.data));
    }, [sessionStorage.getItem("uuid")]);

    const handleLogout = () => {
        sessionStorage.clear();
        window.location.reload(false);
    };

    return (
        <ul className="nav bg-dark">
            <div className="d-flex flex-row col-9 align-items-center">
                <li className="nav-item ">
                    <div className="border-end border-primary">
                        <Link to="/" className="myIconClass ps-4 pe-4">
                            <PaperCrane />
                        </Link>
                    </div>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link h-100 ps-4 pe-4">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/problems" className="nav-link h-100 ps-4 pe-4">
                        Problems
                    </Link>
                </li>
                { sessionStorage.getItem("uuid") == 1 && (
                    <>
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link h-100 ps-4 pe-4">
                            Admin page
                        </Link>
                    </li>
                </>
                )
                }
            </div>
            <div className="h-100 d-flex flex-row justify-content-end col-3 align-items-center" style={{ height: "40px" }}>
                <li className="nav-item h-100">
                    <Link to="/daily" className="nav-link pe-4 border-end border-primary ">
                        Daily Problem
                    </Link>
                </li>
                {sessionStorage.getItem("uuid") ? (
                    <li className="nav-item nav-link ">
                        <button className="btn btn-primary btn-sm" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                ) : (
                    <>
                        <div className="d-flex flex-row align-items-center">
                            <li className="nav-item nav-link ">
                                <LoginModal />
                            </li>
                        </div>
                        <p className="pt-3 opacity-50">or</p>
                        <li className="nav-item nav-link ">
                            <RegisterModal />
                        </li>
                    </>
                )}
            </div>
        </ul>
    );
};

export default Header;
