import React, { Component } from "react";

class Autoselector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      options: this.props.options,
      label: this.props.label
    };
  }

  onChange = e => {
    const userInput = e.currentTarget.value;
    this.setState({
      userInput: e.currentTarget.value
    });
    console.log("chosen one", userInput);
  };


  render() {
    const {
      state: {value}
    } = this;

    let optionsListComponent;

    optionsListComponent = (
      <select onChange={this.onChange} value={value}>
        {this.state.options.map(item => (
          <option key={item.id} value={item.option}>
            {item.option}
          </option>
        ))}
      </select>
    );
    return (
      <div>
        <label>{this.state.label}</label>
        {optionsListComponent}
      </div>
    );
  }
}

export default Autoselector;




