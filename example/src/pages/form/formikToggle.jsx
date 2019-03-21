import React from "react";
import { Page, ReactSpecimen, render } from "catalog";
import { FormikToggle, IconQuestionmark, IconElectricity, IconOff, IconOn } from "june-design-system";

export default class FormikTogglePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      label: "",
      checked: false,
      checkedTooltip: false,
      checkedIconTooltip: false,
      field: {
        name: 'example-input',
      },
      serverErrors: {
        'example-input': null,
      },
    };
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
    this.handleCheckedChangeTooltip = this.handleCheckedChangeTooltip.bind(this);
    this.handleCheckedChangeIconTooltip = this.handleCheckedChangeIconTooltip.bind(this);
  }

  handleCheckedChange(){
    this.setState({checked: !this.state.checked})
  }

  handleCheckedChangeTooltip(){
    this.setState({ checkedTooltip: !this.state.checkedTooltip });
  }

  handleCheckedChangeIconTooltip(){
    this.setState({ checkedIconRightTooltip: !this.state.checkedIconTooltip })
  }

  render(){
    return (
      <Page>
        ## Toggle Regular
        <ReactSpecimen span={3}>
          <FormikToggle
            iconOff={this.state.checked ? <IconOff /> : <IconOn />}
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
            iconOff={this.state.checked? <IconOff/> : <IconOn/>}
            label="Toggle with a long label discription"
            field={this.state.field}
            form={this.state.form}
            onCheckedChange={this.handleCheckedChange}
            checked={this.state.checked}
          />
        </ReactSpecimen>
        ## Toggle Icon Right & Tooltip
        <ReactSpecimen span={3}>
          <FormikToggle
            iconOff={this.state.checked ? <IconOff /> : <IconOn />}
            tooltipToggle={<IconQuestionmark />}
            iconRight={<IconElectricity />}
            label="Toggle with an icon"
            field={this.state.field}
            form={this.state.form}
            onCheckedChangeIconTooltip={this.handleCheckedChangeIconTooltip}
            checkedIconTooltip={this.state.checkedIconTooltip}
          />
        </ReactSpecimen>
        <label>
          state={this.state.checkedIconTooltip ? "true" : "false"}
        </label>
        ## Toggle Tooltip
        <ReactSpecimen span={3}>
          <FormikToggle
            iconOff={this.state.checked ? <IconOff /> : <IconOn />}
            tooltipToggle={<IconQuestionmark />}
            label="Toggle with a long label discription and an info icon"
            field={this.state.field}
            form={this.state.form}
            onCheckedChangeTooltip={this.handleCheckedChangeTooltip}
            checkedIconTooltip={this.state.checkedTooltip}
          />
        </ReactSpecimen>
        <label>state={this.state.checkedTooltip ? "true" : "false"}</label>
      </Page>
    );
  }
}
