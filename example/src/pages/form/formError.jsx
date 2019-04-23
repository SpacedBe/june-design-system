import React from "react";
import {Page, ReactSpecimen} from "catalog";
import {FormError} from 'june-design-system';

export default class FormErrorPage extends React.Component {
  render() {
    return (
      <Page>
        <ReactSpecimen>
          <FormError>I am an error returned by the server.</FormError>
        </ReactSpecimen>
      </Page>
    )
  }
}
