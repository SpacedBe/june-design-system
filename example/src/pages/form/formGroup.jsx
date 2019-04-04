import React from "react";
import {Page, ReactSpecimen} from "catalog";
import {FormGroup, Button} from "june-design-system";

export default class FormGroupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Page>
        <p>A form group adds a margin on the bottom of the wrapped element.</p>
        <ReactSpecimen span={3}>
          <FormGroup>
            This is a form group.
          </FormGroup>
        </ReactSpecimen>
      </Page>
    );
  }
}
