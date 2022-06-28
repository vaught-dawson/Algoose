import React from "react";
import { ReactComponent as PaperCrane } from "../../assets/Images/paperCrane.svg";
import "../../styles/style.css";
import { Link } from "react-router-dom";
import LoginModel from "../Models/LoginModel";
import RegisterModel from "../Models/RegisterModel";
const Header = () => {
    return (
        <ul className="nav bg-dark p-1">
            <div className="d-flex flex-row col-9">
                <li className="nav-item ">
                    <div className="border-end border-primary">
                        <Link to="/" className="myIconClass p-0 me-3 ">
                            <PaperCrane />
                        </Link>
                    </div>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/problems" className="nav-link ">
                        Problems
                    </Link>
                </li>
            </div>
            <div className="d-flex flex-row justify-content-end col-3">
                <li className="nav-item">
                    <Link to="/daily" className="nav-link">
                        Daily Problem
                    </Link>
                </li>
                <div className="border-start border-primary d-flex flex-row ">
                <li className="nav-item nav-link ">
                        <button
                            type="button"
                            className="btn btn-primary btn-sm nav-item  "
                            data-bs-toggle="modal"
                            data-bs-target="#loginModal">
                        Login
                        </button>
                    
                    <LoginModel />
                </li>
                </div>
                <li className="nav-item nav-link ">
                        <button
                            type="button"
                            className="btn btn-primary btn-sm nav-item  "
                            data-bs-toggle="modal"
                            data-bs-target="#registerModal">
                        Register
                        </button>
                    
                    <RegisterModel />
                </li>
            </div>
        </ul>
    );
};

export default Header;
