import React from "react";
import { Page, ReactSpecimen, render } from "catalog";
import { FormikToggle, IconQuestionmark, IconElectricity } from "june-design-system";

export default class FormikTogglePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      label: "",
      checked: false,
      msg: "",
      field: {
        name: 'example-input',
      },
      serverErrors: {
        'example-input': null,
      },
    };
    this.handleCheckedChange = this.handleCheckedChange.bind(this);

  }

  handleCheckedChange(isChecked){
    console.log("test", isChecked);
    this.setState({checked: !this.state.checked})
    console.log(this.state)
  }

  render(){
    return (
      <Page>
        ## Toggle Regular
        <ReactSpecimen span={3}>
          <FormikToggle
            label="Regular Toggle"
            field={this.state.field}
            form={this.state.form}
            onCheckedChange={this.handleCheckedChange}
            checked={this.state.checked}
          />
        </ReactSpecimen>
        <label>state={this.state.checked ? "true" : "false"}</label>
        ## Toggle Long Label.
        <ReactSpecimen span={3}>
          <FormikToggle
            label="Toggle with a long label discription"
            field={this.state.field}
            form={this.state.form}
            onCheckedChange={this.handleCheckedChange}
            checked={this.state.checked}
          />
        </ReactSpecimen>
        ## Toggle Long Icon Right
        <ReactSpecimen span={3}>
          <FormikToggle
            tooltipToggle={<IconQuestionmark />}
            iconRight={<IconElectricity />}
            label="Toggle with an icon"
            field={this.state.field}
            form={this.state.form}
            onCheckedChange={this.handleCheckedChange}
            checked={this.state.checked}
          />
        </ReactSpecimen>
        ## Toggle Long Icon Right & Tooltip
        <ReactSpecimen span={3}>
          <FormikToggle
            tooltipToggle={<IconQuestionmark />}
            label="Toggle with a long label discription and an info icon"
            field={this.state.field}
            form={this.state.form}
            onCheckedChange={this.handleCheckedChange}
            checked={this.state.checked}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}
