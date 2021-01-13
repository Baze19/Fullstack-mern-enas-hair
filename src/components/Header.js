import React from 'react'
import {Link} from 'react-router-dom'
import insta from '../images/insta.png'
import what from '../images/what.png'
export default function Header() {
    return (
        <div>
            <header style={headerStyle}>
               <h1> ENA'S HAIR </h1>
                <p>phone:08094809021</p>
                <p> <img src={insta} className="flex" width="50px"></img>Enahair.524</p>
                <p> <img src={what} className="flex" width="50px"></img>08094809021</p>
                <Link to="/">Home Page</Link> | <Link to="/images"> View Hair Pictures</Link>
            </header>
            
        </div>
    )
}

const headerStyle = {
    background: "#333",
    color:"yellow",
    textAlign:"center",
    padding:"10px"
}