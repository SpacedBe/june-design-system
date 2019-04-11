/**
 * @class FormikAutoFill
 */

import * as React from "react";
// @ts-ignore
import Autocomplete, {State} from 'react-autocomplete';
import AwesomeDebouncePromise from 'awesome-debounce-promise';


type Props = {
  field: {
    name: string;
  }
  form: {
    ['errors']: string;
    ['touched']: boolean;
  };

  ['serverErrors']: string;

  label?: string,
  error: boolean,
  disabled: boolean,

  fetch: (text: string) => Promise<any>;
  onChange: (selected: any) => void;
}

interface Item {
  id: number,
  value: number | string,
  name: string,
  meta: any,
}

interface State {
  name: string,
  value: string,
  selected?: any,
  data: Item[],
}

export class FormikAutoFill extends React.Component<Props, State> {
  private fetch: any;

  constructor(props: any) {
    super(props);

    this.state = {
      name: props.field.name,
      value: "",
      data: [],
    };

    this.fetch = AwesomeDebouncePromise(
      (searchText) => this.props.fetch(searchText),
      500,
      {},
    );
  }

  render() {
    const FieldName = this.props.field.name;
    const touched = this.props.form.touched[FieldName];
    const errors = (this.props.serverErrors && this.props.serverErrors[FieldName]) || this.props.form.errors[FieldName];

    return (
      <div>
        <label
          htmlFor={FieldName}>
          {this.props.label}
        </label>

        <Autocomplete
          inputProps={{autoComplete: 'nope'}}
          items={this.state.data}
          value={this.state.value}
          renderItem={(item: any, isHighlighted: boolean) => this.renderItem(item, isHighlighted)}
          getItemValue={(val: any) => this.getItemValue(val)}
          onChange={(val: any) => this.onChange(val)}
          onSelect={(val: any, item: Item) => this.onSelect(val, item)}
        />

        {touched && errors && <div>{errors}</div>}
      </div>
    );
  }

  onSelect(val: string, item: Item) {
    this.setState({
      value: val,
      selected: item,
    });

    this.props.onChange(item);
  }

  onChange(e: any) {
    this.setState({
      value: e.target.value,
      selected: null,
    });

    this.props.onChange(null);

    if (e.target.value && e.target.value.length > 2) {
      this.retrieveDataAsynchronously(e.target.value);
    } else {
      this.setState({data: []});
    }
  }

  retrieveDataAsynchronously(searchText: string) {
    this.fetch(searchText)
      .then((data: any[]) => {
        this.setState({data: data || []});
      });
  }

  renderItem(item: Item, isHighlighted: boolean) {
    return (
      <div style={{background: isHighlighted ? 'lightgray' : 'white'}} key={item.id}>
        {item.name}
      </div>
    );
  }

  getItemValue(item: Item) {
    return `${item.value}`;
  }
}
