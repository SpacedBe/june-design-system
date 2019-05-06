/**
 * @class FormikAutoFill
 */

import * as React from "react";
// @ts-ignore
import Autocomplete, {State} from 'react-autocomplete';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import {getIn} from 'formik';
import {Spinner} from "../spinner/Spinner";
import styled from "styled-components";

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
  translations: {
    loading: string;
    placeholder: string;
  }
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
  items: Item[],
  loading: boolean,
}

const WrapperStyled = styled.div`
  display: flex;
  position: relative;
  flex-flow: column;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
`;

const LabelStyled = styled.span<{ disabled?: boolean; error?: boolean }>`
  font-family: var(--font-secondary);
  padding-bottom: var(--spacing-sm);
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
   padding: 1.2em;
   
   border: 2px solid ${props => {
    if (props.disabled) {
      return 'var(--color-gray-lighter)';
    }
    
    if (props.error) {
      return 'var(--color-error)';
    }
    
    return 'var(--color-gray-light)';
}};
   border-radius: 3px;
   outline: none;
`;

const ResultMenuStyled = styled.div`
  font-size: var(--font-size-m);
  background-color: var(--color-white);
  border: 2px solid var(--color-gray-light);
  border-top: none;
  border-radius: 0 0 3px 3px;
  position: absolute;
  width: 100%;
  z-index: 999;
`;

const ResultItemStyled = styled.div<{ error?: boolean; disabled?: boolean }>`
   width: 100%;
   font-size: var(--font-size-m);
   background-color: var(--color-white);
   color: ${props => props.error ? 'var(--color-white)' : 'var(--color-dark)'};
   padding: var(--spacing-s);
   border-bottom: 1px solid var(--color-gray-light);
   opacity: ${props => props.disabled ? '0.5' : '1'};
   outline: none;

   &:last-of-type {
    border-bottom: none;
   }
`;

const SpinnerStyled = styled.div`
  position: absolute;
  top: 0;
  bottom:0;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FlexStyled = styled.div`
  display: flex;
  align-items: center;
`;

const ErrorMessageStyled = styled.span`
  font-size: var(--font-size-s);
  color: var(--color-error);
  font-weight: var(--font-weight-bold);
  margin-top: var(--spacing-xs);
`;

export class FormikAutoFill extends React.Component<Props, State> {
  private fetch: any;

  constructor(props: any) {
    super(props);

    this.state = {
      name: props.field.name,
      value: "",
      items: [],
      loading: false,
    };

    this.fetch = AwesomeDebouncePromise(
      (searchText: string) => this.props.fetch(searchText),
      500,
      {},
    );
  }

  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const fieldError = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const formError = touched ? (this.props.serverErrors && this.props.serverErrors[name]) || fieldError : null;
    const loading = this.state.loading;

    const inputProps = {
      error: this.props.error,
      disabled: this.props.disabled,
    };

    return (
      <FlexStyled>
        <WrapperStyled>
          <LabelStyled error={formError}
                       disabled={this.props.disabled}>
            {label}
          </LabelStyled>
          <Autocomplete inputProps={inputProps}
                        items={this.state.items}
                        value={this.state.value}
                        renderInput={(props: any) => this.renderInput(props, formError, inputProps.disabled, loading)}
                        renderMenu={(items: Item[]) => this.renderMenu(items, loading)}
                        renderItem={(item: any, isHighlighted: boolean) => this.renderItem(item, isHighlighted)}
                        getItemValue={(val: any) => this.getItemValue(val)}
                        onChange={(val: any) => this.onChange(val)}
                        onSelect={(val: any, item: Item) => this.onSelect(val, item)}
          />
          {formError && <ErrorMessageStyled>{formError}</ErrorMessageStyled>}
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
      this.setState({items: []});
    }
  }

  retrieveDataAsynchronously(searchText: string) {
    this.setState({items: [], loading: true});

    this.fetch(searchText)
      .then((items: any[]) => {
        this.setState({items: items || [], loading: false});
      });
  }

  renderInput(props: any, hasError: boolean, isDisabled: boolean, loading: boolean) {
    return (
      <div style={{position: 'relative'}}>
        <InputStyled {...props}
                     error={hasError}
                     disabled={isDisabled}/>
        <SpinnerStyled>
          {loading ? (<Spinner color='primary'/>) : ''}
        </SpinnerStyled>
      </div>
    );
  }

  renderMenu(items: Item[], loading: boolean) {
    return (
      <ResultMenuStyled>
        {!loading && !items.length ? <ResultItemStyled>{this.props.translations.placeholder}</ResultItemStyled> : ''}
        {loading ? <ResultItemStyled>{this.props.translations.loading}</ResultItemStyled> :
          <div children={items}></div>}
      </ResultMenuStyled>
    );
  }

  renderItem(item: Item, isHighlighted: boolean) {
    return (
      <ResultItemStyled
        style={{background: isHighlighted ? 'var(--color-gray-lighter)' : 'var( --color-white)'}}
        key={item.id}>
        {item.value}
      </ResultItemStyled>
    );
  }

  getItemValue(item: Item) {
    return `${item.value}`;
  }
}
