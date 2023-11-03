import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import '../assets/styles/Homepage.css'
import crewmateIMG from '../assets/images/homeCrewmate.png'
import ufoIMG from '../assets/images/saucer.png'

const Homepage = () => {
    return (
        <div className="Homepage">
            <h1>Welcome to the Crewmate Creator</h1>
            <h2>Here is where you can create your very own set of crewmates before sending them off into space!</h2>
            <br />
            <img className="homepageIMG" src={crewmateIMG} />
            <br />
            <img className="homepageIMG" src={ufoIMG} />
        </div>
    );
}

export default Homepage;