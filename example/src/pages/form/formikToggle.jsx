import React from "react";
import {Page, ReactSpecimen} from "catalog";
import {FormikToggle, IconQuestionmark, IconElectricity} from "june-design-system";

export default class FormikTogglePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      field: {
        name: 'regular',
      },
    };
  }

  render() {
    return (
      <Page>
        ## Toggle Regular
        <ReactSpecimen span={3}>
          <FormikToggle
            name="regular"
            label="Regular Toggle"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>

        ## Toggle Long Label.
        <ReactSpecimen span={3}>
          <FormikToggle
            label="Toggle with a long label discription"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>

        ## Toggle Icon Right & Tooltip
        <ReactSpecimen span={3}>
          <FormikToggle
            tooltip={<IconQuestionmark/>}
            icon={<IconElectricity/>}
            label="Toggle with an icon"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>

        ## Toggle Tooltip
        <ReactSpecimen span={3}>
          <FormikToggle
            tooltip={<IconQuestionmark/>}
            label="Toggle with a long label discription and info icon"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}
