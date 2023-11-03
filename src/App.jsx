import { useState, useLayoutEffect, useRef, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import axios from "axios";
import InfoDisplayer from './components/InfoDisplayer';
import Dashboard from './components/Dashboard';
import DisplayCard from './components/DisplayCard';
import Homepage from './components/Homepage';

// import { createClient } from '@supabase/supabase-js';
// const VITE_DB_KEY = import.meta.env.VITE_DB_KEY
// const VITE_DB_URL = import.meta.env.VITE_DB_URL
// const supabase = createClient(VITE_DB_URL, VITE_DB_KEY);
import databaseUtils from './utils/databaseUtils';

function App() {
    const [fetchData, setFetchData] = useState([]);

    // const fetchingDataFromDB = async () => {

    //     // let id = 3;
    //     // let testColumn = "ok";
    //     // const { error2 } = await supabase
    //     //     .from('test')
    //     //     .insert([{id, textColumn}])
    //     // const {data2, error2 } = await supabase
    //     //     .from('test')
    //     //     .insert([{testColumn }])
    //     // console.log(data2, error2);

    //     const { data, error } = await supabase
    //         .from('crewmates')
    //         .select();
    //     setFilterData(data);

    // }

    useLayoutEffect(() => {
        //databaseUtils.fetchingDataFromDB().then((data) => setFetchData(data));
        // setFetchData(JSON.parse(import.meta.env.VITE_FETCH_DATA));
    }, []);


    useEffect(() => {

    }, []);

    return (
        <div className="App">
            <h1>Crewmates</h1>
            <BrowserRouter>
                {/* <Routes>
                    <Route path="/">
                        <Route index element={<InfoDisplayer
                            info={fetchData}
                        />} />
                        <Route path="cat/:id" element={<DisplayCard info={fetchData} />}></Route>
                    </Route>
                </Routes> */}
                <Dashboard />
                <Routes>
                    <Route path="/">
                        <Route index element={<Homepage
                        />} />

                        <Route path="crewmates">
                            <Route index element={<InfoDisplayer
                                info={fetchData}
                                setInfo={setFetchData}
                            />} />
                            <Route path=":id" element={<DisplayCard info={fetchData} createMode={false}  />}></Route>
                        </Route>

                        <Route path="createCrewmate" element={<DisplayCard info={fetchData} createMode={true}/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>

    )
}

export default App

