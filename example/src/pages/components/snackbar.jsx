import React from "react";
import {Page, ReactSpecimen} from "catalog";
import {Snackbar} from 'june-design-system';

export default class SnackbarPage extends React.Component {
  render() {
    return (
      <Page>
        <ReactSpecimen>
          <Snackbar>
            This is a snackbar.
          </Snackbar>
        </ReactSpecimen>

        <ReactSpecimen>
          <Snackbar>
            It grows with its contents.
          </Snackbar>
        </ReactSpecimen>
      </Page>
    )
  }
}
