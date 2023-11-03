import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import '../assets/styles/Dashboard.css'

const Dashboard = (info) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        switch (tabName) {
            case 'Home':
                navigate("/");
                break;
            case 'Create':
                navigate("createCrewmate");
                break;
            case 'List':
                navigate("crewmates");
                break;
            default:
                navigate("/");
        }
    };

    return (
        <div className="Dashboard">
            <ul>
                <li className={activeTab === 'Home' ? 'active' : ''}>
                    <button className="dashboardButton" onClick={() => handleTabClick('Home')}>Home</button>
                </li>
                <li className={activeTab === 'List' ? 'active' : ''}>
                    <button className="dashboardButton" onClick={() => handleTabClick('List')}>List Crewmates</button>
                </li>
                <li className={activeTab === 'Create' ? 'active' : ''}>
                    <button className="dashboardButton" onClick={() => handleTabClick('Create')}>Create New Crewmate</button>
                </li>
            </ul>

        </div>
    );
}

export default Dashboard;