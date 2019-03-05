import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Fab, IconCheck} from 'june-design-system';

export default class FabPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Page>
        ## FAB

        <ReactSpecimen>
          <Fab>
            <IconCheck />
          </Fab>
        </ReactSpecimen>
        <ReactSpecimen>
          <Fab>
            Hi!
          </Fab>
        </ReactSpecimen>
      </Page>
    )
  }
}
