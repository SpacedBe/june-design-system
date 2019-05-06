import React from "react";
import {Page, ReactSpecimen} from "catalog";
import {FormikCheckbox, FormikToggle, IconQuestionmark, IconElectricity} from "june-design-system";
import {Flex} from "reflexbox";

export default class FormikTogglePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      field: {
        name: 'regular',
        disabled: false,
      },
    };
  }

  toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled
    });
  }

  render() {
    return (
      <Page>
        <Flex>
          <div className='wrapper'>
            <FormikCheckbox
              error={false}
              field={{
                name: 'isDisabled',
                value: this.state.disabled,
                onChange: () => this.toggleDisabled()
              }}
              form={{
                errors: { 'regular': null },
                touched: { 'regular': false }
              }}
              label='Disabled'
              type='checkbox'
            />
          </div>
        </Flex>
        ## Toggle Regular
        <ReactSpecimen span={3}>
          <FormikToggle
            name="regular"
            label="Regular Toggle"
            disabled={this.state.disabled}
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>

        ## Toggle Icon Right & Tooltip
        <ReactSpecimen span={3}>
          <FormikToggle
            tooltip={<IconQuestionmark fill={this.state.disabled ? 'var(--color-disabled)' : 'var(--color-dark)'}/>}
            icon={<IconElectricity fill={this.state.disabled ? 'var(--color-disabled)' : 'var(--color-dark)'}/>}
            label="Toggle with an icon"
            disabled={this.state.disabled}
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}
