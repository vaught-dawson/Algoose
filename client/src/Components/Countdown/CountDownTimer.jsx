import React from "react";
import SolutionPage from "../Problems/SolutionPage";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../../hooks/useCountdown";
import { Tab } from "react-bootstrap";
import "../../styles/tabStyle.css";

const CountDownTimer = (props) => {
    const [minutes, seconds] = useCountdown(props.targetDate);
    if (minutes + seconds <= 0) {
        props.setReady(true);
        return;
    } else {
        return <ShowCounter minutes={minutes} seconds={seconds} />;
    }
};

const ShowCounter = ({ minutes, seconds }) => {
    return (
        <div className="w-100 text-center">
            <div className="d-flex">
                <p className="me-3">Time till solution unlocks:</p>
                <div className="d-flex justify-content-center">
                    <DateTimeDisplay value={minutes}/> : <DateTimeDisplay value={seconds} />
                </div>
            </div>
        </div>
    );
};

export default CountDownTimer;
