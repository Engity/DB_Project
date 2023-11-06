import React, { useEffect, useState } from "react";
import '../assets/styles/InfoDisplayer.css'
import { useNavigate } from "react-router-dom";
import databaseUtils from '../utils/databaseUtils';

const redirectHandler = (link) => {
    if (window.confirm('This will redirect to another window.\n Would you like to proceed?')) {
        window.location.href = link;
    }
}

const InfoDisplayer = ({ info, setInfo }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate("/crewmates/" + id);
    }

    useEffect(() => {
        databaseUtils.fetchingDataFromDB().then((data) => setInfo(data.reverse()));
        // setFetchData(JSON.parse(import.meta.env.VITE_FETCH_DATA));
    }, []);

    const [currentView, setCurrentView] = useState(0);

    const entriesPerview = 5;
    const viewNext = () => {
        if (currentView + entriesPerview < info.length) {
            setCurrentView(currentView + entriesPerview);
        }
    }

    const viewPrevious = () => {
        if (currentView - entriesPerview >= 0) {
            setCurrentView(currentView - entriesPerview);
        }
    }
  
    return (
        <div className='InfoDisplayer'>
            {(info && info.length != 0) ?
                <div>
                    <h3 className="TableInfo"> Current View {currentView} to {Math.min(info.length, currentView + entriesPerview)} of {info.length}</h3>
                    <table className="InfoTable">
                        <thead>

                        </thead>
                        <tbody>
                            <tr className="table-header">
                                <th className="col col-1">Index</th>
                                <th className="col col-2">Name</th>
                                <th className="col col-3">Crewmate</th>
     
                            </tr>

                            {info.map((crewmate, index) => {
                                if (!crewmate) {
                                    return null;
                                }
                                if (index < currentView || index >= currentView + entriesPerview)
                                    return null;
                                let {id, name, weight, speed, color } = crewmate;

                                return (
                                    <tr key={id} className="table-row" onClick={(() => handleClick(index))}>
                                        <td className="col col-1">{index}</td>
                                        <td className="col col-2">{name}</td>
                                        <td className="col col-3">{color? <img src={'/src/assets/images/' + color + 'Sprite.png'} />: <></>}</td> 
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                    <div className="TableTraversal">
                        <center>
                            {currentView - entriesPerview >= 0 ?
                                <button onClick={() => viewPrevious()}>
                                    Prev
                                </button> : <></>}
                            {currentView + entriesPerview < info.length ?
                                <button onClick={() => viewNext()}>
                                    Next
                                </button> : <></>}
                        </center>
                    </div>
                </div> : (
                    <p id="NoData">
                        No data
                    </p>
                )}

        </div>
    );
}

export default InfoDisplayer;