import React from "react";
import "./App.css";

export class Variable extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.props.onChange(value);
    }

    render() {
        return (
        <div className="divElement">
          <label>{this.props.label}</label>
          <input type="number" className="variable-input" defaultValue={this.props.value} onChange={this.handleChange}/>
        </div>
        );
    }
}