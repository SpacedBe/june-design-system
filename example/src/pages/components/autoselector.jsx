import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Autoselector extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    options: []
  };

  constructor(props) {
    super(props);

    this.state = {
      activeOptions: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: ""
    };
  }

  onChange = e => {
    console.log('changed');
    const { options } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredOptions = options.filter(
      option =>
        option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );


    this.setState({
      activeOptions: 0,
      filteredOptions,
      showOptions: true,
      userInput: "e.currentTarget.value"
    });
    console.log(userInput)
  };

  // onClick = e => {
  //   this.setState({
  //     activeOptions: 0,
  //     filteredOptions: [],
  //     showOptions: false,
  //     userInput: e.currentTarget.innerText
  //   });
  // };

  onClick = e => {
    console.log('clicked');
    const { activeOptions, filteredOptions } = this.state;
    if (e.keyCode === 13) {
      this.setState({
        activeOptions: 0,
        showOptions: false,
        userInput: filteredOptions[activeOptions]
      });
    } else if (e.keyCode === 38) {
      if (activeOptions === 0) {
        return;
      }
      this.setState({ activeOptions: activeOptions - 1 });
    } else if (e.keyCode === 40) {
      if (activeOptions - 1 === filteredOptions.length) {
        return;
      }
      this.setState({ activeOptions: activeOptions + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeOptions,
        filteredOptions,
        showOptions,
        userInput
      }
    } = this;

    const Fragment = styled.div`
      border: 2px solid #bfbfbf;
      padding: 10px 10px 0px 10px;
      border-radius: 2.5px;
      opacity: ${props => (props.disabled ? "0.5" : "1")};
      outline: none;
      display: flex;
      justify-content: space-between;
      height: 40px;
      width: 100%;
      background: white;
      display: flex;
      flex-flow: column;
    `;

    const InputField = styled.input`
      border: none;
      outline: none;
      background: white;
    `;

    const SuggestionList = styled.select`
      width: 100%;
      height: 100%;
      margin-left: -52px;
    `;

    const SuggestionListItem = styled.option`
      width: 100%;
      height: 20px;
      padding: 10px 10px 10px 10px;
      margin-bottom: 2px;
      border: 2px solid #bfbfbf;
      background: white;
      list-style-type: none;
      font-size: 0.8em;
    `;
    let optionsListComponent;


        optionsListComponent = (
          <SuggestionList
            onClick={onChange}
            value={userInput}>
            {filteredOptions.map((option, index) => {
              return (
                <SuggestionListItem
                  key={option}
                >
                  {option}
                </SuggestionListItem>
              );
            })}
          </SuggestionList>
        );


    return (
      <Fragment>
        {optionsListComponent}
      </Fragment>
    );
  }
}

export default Autoselector;
