import React from "react";
import "./App.css";

var variables = ["x","y","z","a","b","c","d","e","f","g","h","i","j","k"]

function generateLambda(maxVariableAmount, maxLength) {
    var select  = 0;
    (maxLength > 0) ? select=Math.floor(Math.random()*3) : select=Math.round(Math.random());
    switch (select) {
        case 0:
            return variables[Math.round(Math.random() * (maxVariableAmount - 1))];
        case 1:
            return "(λ" + variables[Math.round(Math.random() * (maxVariableAmount - 1))] + "." + generateLambda(maxVariableAmount, maxLength) + ")";
        case 2:
            return "(" + generateLambda(maxVariableAmount, maxLength-1) + generateLambda(maxVariableAmount, maxLength-1) + ")";
        case 3: //In the very rare case that math.random is exactly 1.
            return generateLambda(maxVariableAmount, maxLength);
        default:
            alert("Something went wrong");
            return "";
    }
}

export class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        var vAmount = this.props.maxVariableAmount;
        var mLength = this.props.maxLength;
        if(vAmount >= variables.length || vAmount < 1) {
            alert("Variable amount too high. Please use a number between 1 and " + variables.length);
        } else if(mLength < 1) {
            alert("Max length must be a positive integer");
        }else {
            var result = generateLambda(vAmount, mLength);
            this.props.onClick(result);
        }
    }

    render() {
        return (
            <div className="divElement">
                <button onClick={this.handleClick} className="element">Generate a lambda term</button>
            </div>
        );
    }
}