import React from 'react';
import { Page, ReactSpecimen, render } from 'catalog';
import { FormikSelect } from 'june-design-system';

export default class FormikSelectPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      options: [],
      label: ""
    };
  }

  onChange = e => {
    const userInput = e.currentTarget.value;
    this.setState({
      userInput: e.currentTarget.value
    });
  };

  render() {
    return (
      <Page>
      ## Dynamic selector
        <ReactSpecimen span={3}>
          <FormikSelect
            htmlFor="isSelect"
            label="Gender"
            options={[{ option: "ONE" },
            { option: "TWO" },
            { option: "THREE" },
            { option: "FOUR" }]}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}
