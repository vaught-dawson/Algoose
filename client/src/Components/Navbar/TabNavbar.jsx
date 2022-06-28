import React, { useState } from "react";
import ProblemDesc from "../Problems/ProblemDesc";
import {Tabs, Tab, TabContent, Container, Row} from 'react-bootstrap'

import '../../styles/tabStyle.css'

import SolutionPage from "../Problems/SolutionPage";

const TabNavbar = () => {
    const [isReady, setIsReady] = useState(false);
    

    

    const handleReadyState = (boolean) =>{
        setIsReady(boolean);
    }

    return (
        <Tabs defaultActiveKey="description" className="d-flex">
            <Tab eventKey="description" title="Description" className="h-100 bg-dark flex-fill" >
                    <ProblemDesc setReady={handleReadyState} isReady={isReady}/>
            </Tab>
            {
                !isReady ? 
                <Tab eventKey="notReady" title="Solution" tabClassName="opacity-25" disabled ></Tab>
                :
                <Tab eventKey="notReady" title="Solution" tabClassName="opacity-100"><SolutionPage/></Tab>
            }
            
        </Tabs>
    );
};


export default TabNavbar;
