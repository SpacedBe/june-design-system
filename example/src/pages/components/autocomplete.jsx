
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
      label: "",
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
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
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

    const InputField = styled.input`
      background: white;
      border: 2px solid #bfbfbf;
      padding: 10px 10px 10px 10px;
    `;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <SuggestionList>
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <SuggestionListItem key={suggestion} onClick={onClick}>
                  {suggestion}
                </SuggestionListItem>
              );
            })}
          </SuggestionList>
        );
      } else {
        suggestionsListComponent = (
          <div>
            <em>No result message...</em>
          </div>
        );
      }
    }

    return (
      <div>
        <label>{this.props.label}</label>

        <InputField
          type="text"
          placeholderText={this.props.placeholderText}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </div>
    );
  }
}
export default Autocomplete;
