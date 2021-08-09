import React, { Component } from "react";
import { Link } from "react-router-dom";
import sushi from "./sushi.png";
import "./Sardines.css";

class Sardines extends Component {
    render() {
        return (
            <div className="Sardines">
                <img src={sushi} alt="sushi"/>
                <div className="black-square4">
                    <p>Ewww...you really wanna eat that?</p>
                    <Link to="/vending">Go Back?</Link>
                </div>
            </div>
        )
    }
}
export default Sardines;