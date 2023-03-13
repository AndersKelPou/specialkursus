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
        <div className="control">
          <label className="label">{this.props.label}</label>
          <input type="number" min={this.props.minValue} placeholder={`${this.props.minValue} to ${this.props.maxValue}`} max={this.props.maxValue} className="input" defaultValue={this.props.value} onChange={this.handleChange}/>
        </div>
        );
    }
}