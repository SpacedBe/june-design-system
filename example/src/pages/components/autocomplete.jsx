
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
<<<<<<< Updated upstream
import styled from "styled-components";

=======
import { Page, ReactSpecimen } from 'catalog';

import styled from "styled-components";


>>>>>>> Stashed changes
class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
<<<<<<< Updated upstream
      label: "",
=======
>>>>>>> Stashed changes

      userInput: "",
      placeholderText: ""
    };
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    } else if (e.keyCode === 38) {
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
<<<<<<< Updated upstream
    } else if (e.keyCode === 40) {
=======

    } else if (e.keyCode === 40) {

>>>>>>> Stashed changes
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

<<<<<<< Updated upstream
=======



>>>>>>> Stashed changes
    const SuggestionList = styled.ul`
      width: 100%;
      height: 100%;
      margin-left: -52px;
    `;

    const SuggestionListItem = styled.li`
      width: 100%;
      height: 20px;
      padding: 10px 10px 10px 10px;
      margin-bottom: 2px;
      border: 2px solid #bfbfbf;

      background: white;
      list-style-type: none;
      font-size: 0.8em;
    `;

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    const InputField = styled.input`
      background: white;
      border: 2px solid #bfbfbf;
      padding: 10px 10px 10px 10px;
    `;

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <SuggestionList>
            {filteredSuggestions.map((suggestion, index) => {
<<<<<<< Updated upstream
              return (
                <SuggestionListItem key={suggestion} onClick={onClick}>
=======

              return (
                <SuggestionListItem key={suggestion} onClick={onClick}>

>>>>>>> Stashed changes
                  {suggestion}
                </SuggestionListItem>
              );
            })}
          </SuggestionList>
        );
      } else {
        suggestionsListComponent = (
<<<<<<< Updated upstream
          <div>
=======

          <div>

>>>>>>> Stashed changes
            <em>No result message...</em>
          </div>
        );
      }
    }

    return (
<<<<<<< Updated upstream
      <div>
        <label>{this.props.label}</label>
=======

      <div>
>>>>>>> Stashed changes
        <InputField
          type="text"
          placeholderText={this.props.placeholderText}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    );
  }
}

<<<<<<< Updated upstream
=======


// const Div = styled.div`
//       border: 2px solid #bfbfbf;
//       padding: 10px 10px 0px 10px;
//       border-radius: 2.5px;
//       outline: none;
//       display: flex;
//       justify-content: space-between;
//       height: 40px;
//       width: 100%;
//       background: white;
//       display: flex;
//       flex-flow: column
//   `;

>>>>>>> Stashed changes
export default Autocomplete;
