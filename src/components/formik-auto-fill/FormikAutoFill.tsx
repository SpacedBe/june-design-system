/**
 * @class FormikAutoFill
 */

import * as React from "react";
// @ts-ignore
import Autocomplete, {State} from 'react-autocomplete';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import {getIn} from 'formik';
import {Spinner} from "../spinner/spinner";
import styled from "styled-components";
import Color from "../../helpers/color";

const color = new Color();

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

const WrapperStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  text-align: left;
  padding-left: var(--spacing-m);
`;

const LabelStyled = styled.span<{ disabled?: boolean; error?: boolean }>`
  font-family: var(--font-secondary);
  padding-bottom: var(--spacing-xs);
  color: ${props => {
  if (props.disabled) {
    return 'var(--color-disabled)';
  }

  if (props.error) {
    return 'var(--color-error)';
  }

  return 'var(--color-dark)';
}};
`;

const InputStyled = styled.input<{ error?: boolean; disabled?: boolean }>`
   width: 100%;
   font-size: var(--font-size-m);
   background-color: var(--color-white);
   color: ${props => props.error ? 'var(--color-error)' : 'var(--color-dark)'};
   padding: var(--spacing-s);
   border: ${props => props.error ? `2px solid var(--color-error)` : `2px solid var(--color-gray-light)`};
   border-radius: 3px;
   opacity: ${props => props.disabled ? '0.5' : '1'};
   outline: none;
`;

const InputLoadingStyled = styled.div<{ error?: boolean; disabled?: boolean }>`
   width: 100%;
   padding-top: -1.5px;
   font-size: var(--font-size-m);
   background-color: var(--color-white);
   color: ${props => props.error ? 'var(--color-error)' : 'var(--color-dark)'};
   padding: var(--spacing-s);
   border-bottom: ${props => props.error ? `2px solid var(--color-error)` : `2px solid var(--color-gray-light)`};
   border-right: ${props => props.error ? `2px solid var(--color-error)` : `2px solid var(--color-gray-light)`};
   border-left: ${props => props.error ? `2px solid var(--color-error)` : `2px solid var(--color-gray-light)`};
   border-radius: 1px;
   opacity: ${props => props.disabled ? '0.5' : '1'};
   outline: none;
`;


const FlexStyled = styled.div`
  display: flex;
  align-items: center;
`

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
    const name = this.props.field.name;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = (this.props.serverErrors && this.props.serverErrors[name]) || error;

    const inputProps = {
      error: this.props.error,
      disabled: this.props.disabled,
    };

    const spinnerContent = (
      <Spinner color={color.getColor('primary')}/>
    );

    return (
      <FlexStyled>
         {spinnerContent}
        <WrapperStyled>
          <LabelStyled error={this.props.error}
                      disabled={this.props.disabled}>
            {label}

          </LabelStyled>
          <Autocomplete inputProps={inputProps}
                        items={[{id:'0',name:'ABC'},{id:'1',name:'DEF'},{id:'2',name:'GHI'},{id:'3',name:'JKL'},{id:'4',name:'MNO'}]}
                        value={this.state.value}
                        renderInput={(props: any) => this.renderInput(props, inputProps.error, inputProps.disabled)}
                        renderItem={(item: any, isHighlighted: boolean) => this.renderItem(item, isHighlighted)}
                        getItemValue={(val: any) => this.getItemValue(val)}
                        onChange={(val: any) => this.onChange(val)}
                        onSelect={(val: any, item: Item) => this.onSelect(val, item)}
                        />
          {touched && errors && <div>{errors}</div>}
        </WrapperStyled>
     </FlexStyled>
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

  renderInput(props: any, hasError: boolean, isDisabled: boolean) {
    return (
      <InputStyled {...props}
              error={hasError}
              disabled={isDisabled} />
    );
  }

  renderItem(item: Item, isHighlighted: boolean) {
    return (
      <InputLoadingStyled style={{background: isHighlighted ? 'var(--color-gray-lighter)' : 'var( --color-white)'}} key={item.id}>
        {item.id} - {item.name}
      </InputLoadingStyled>
    );
  }

  getItemValue(item: Item) {
    return `${item.value}`;
  }
}
