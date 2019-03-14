/**
 * @class FormikAutocomplete
 */

import * as React from "react";

interface Option {
  option: string,
}

type Props = {
  field: {
    name: string,
  }
  form: {
    ['errors']: string;
    ['touched']: boolean;
  };
  ['serverErrors']: string;
  userInput?: string,
  options: Option[],
  activeSuggestion: number,
  filteredSuggestions: any[],
  showSuggestions: false,
  label?: string,
  error?: boolean,
  focussed?: boolean,
  disabled?: boolean,
}

export class FormikAutocomplete extends React.Component<Props>{
  render(){
    console.log(this.props.options)
    return (
      <div>
        <label>{this.props.label}</label>
        <ul>
          {this.props.options.map(item => (
            <li key={item.option} value={item.option}>
              {item.option}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
