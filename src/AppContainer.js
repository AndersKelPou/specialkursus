import React from "react";
import "./App.css";
import 'bulma/css/bulma.css';

var variables = ["x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]

function generateLambda(maxVariableAmount, minLength, maxLength) {
    var select = generateSelect(minLength, maxLength);

    switch (select) {
        case 0:
            return variables[Math.round(Math.random() * (maxVariableAmount - 1))];
        case 1:

            return "(λ" 
            + variables[Math.round(Math.random() * (maxVariableAmount - 1))] 
            + "." 
            + generateLambda(maxVariableAmount, minLength - 1, maxLength - 1) 
            + ")";

        case 2:
            return "(" 
            + generateLambda(maxVariableAmount, minLength - 1, maxLength - 1) 
            + generateLambda(maxVariableAmount, minLength - 1, maxLength - 1) 
            + ")";

        default:
            alert("Something is wrong with the select statement.");
            return "";
    }
}

function generateSelect(minLength, maxLength) {
    if (maxLength < 1) return 0;
    if (minLength > 0) {
        return Math.round(Math.random() + 1);
    }
    if (minLength < 1) {
        return Math.floor(Math.random() * 3);
    }
}

export class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        var maxVariableAmount = this.props.maxVariableAmount;
        var minLength = this.props.minLength;
        var maxLength = this.props.maxLength;

        if(maxVariableAmount > variables.length || maxVariableAmount < 1)
        {
            alert("Variable amount too high. Please use a number between 1 and " + variables.length);

        } else if(minLength < 1)
        {
            alert("Min length must be a positive integer");

        } else if(minLength > maxLength)
        {
            alert("Min length must be equal or less than max Length");

        } else if (maxLength < 1)
        {
            alert("Max length must be a positive integer");
        } else 
        {
            var result = generateLambda(maxVariableAmount, minLength, maxLength);
            this.props.onClick(result);
        }
    }

    render() {
        return (
            <div className="divElement">
                <button className="button is-primary" onClick={this.handleClick}>Generate</button>
            </div>
        );
    }
}