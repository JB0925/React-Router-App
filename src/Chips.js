import React, { Component } from "react";
import { Link } from "react-router-dom";
import lays from "./lays.png";
import "./Chips.css"
import VendingMachine from "./VendingMachine";

class Chips extends Component {
    static defaultProps = {
        leftLean: 20,
        rightLean: -20
    }
    constructor(props) {
        super(props)
        this.state = {numChips: 0}
        this.renderChips = this.renderChips.bind(this);
        this.rotateChips = this.rotateChips.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    rotateChips(idx) {
        if (idx % 2 === 0) return this.props.leftLean * Math.floor(Math.random() * 10)
        return this.props.rightLean * Math.floor(Math.random() * 10);
    }

    handleClick() {
        this.setState(st => ({numChips: st.numChips + 1}))
    }


    renderChips() {

        let chipArray = Array(this.state.numChips).fill(lays);
        return chipArray.map((c, idx) => <img style={{transform: `rotate(${this.rotateChips(idx)}deg)`}}
                                        src={c} 
                                        alt="chips" 
                                        key={Math.floor(Math.random() * 10)}/>)
    }

    render() {
        let allChips = this.renderChips();
        return (
            <div className="Chips">
                <div className="black-square3">
                    Bags Eaten
                    <div className="number">{this.state.numChips}</div>
                    <button onClick={this.handleClick}>Eat Chips!</button>
                    <Link to="/vending">Go Back?</Link>
                </div>
                {allChips}
            </div>
        )
    }
}
export default Chips;