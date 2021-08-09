import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Coke from "./Coke";
import "./VendingMachine.css";
import vending from "./vending.png";

class VendingMachine extends Component {
    render() {
        return (
            <div className="VendingMachineContainer">
                <div className="black-square">
                    <h3>Hi I am a vending machine. Please choose a snack!</h3>
                </div>
                <div className="VendingMachine">
                    <h1>Choose a Snack!</h1>
                    <img src={vending} alt="vending machine"/>  
                </div>
                <div className="black-square2">
                    <Link to="/chips">Eat Chips</Link>
                    <Link to="/sardines">Eat Sardines</Link>
                    <Link to="/coke">Drink Coke</Link>
                </div>
            </div>
        )
    }
}
export default VendingMachine;