import React, { Component } from "react";
import { Link } from "react-router-dom";
import coke from "./coke.png";
import "./Coke.css";

class Coke extends Component {
    render() {
        return (
            <div className="Coke">
                <img className="spin" src={coke} alt="coke"/>
                <div className="black-square5">
                    <p>Ahhh...so refreshing!!!</p>
                    <Link to="/vending">Go Back?</Link>
                </div>
                <img className="spin" src={coke} alt="coke"/>
            </div>
        )
    }
}
export default Coke;