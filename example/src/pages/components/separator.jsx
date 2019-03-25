import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Separator } from 'june-design-system';

export default class FabPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'Of',
    };
  }

  changeContent(event) {
    this.setState({ content: event.target.value })
  }

  render(){
    return(
      <Page>
        ## Separator
        <ReactSpecimen span={3}>
          <Separator>
            {this.state.content}
          </Separator>
        </ReactSpecimen>
        <div>
          <label htmlFor="content">Content</label>
          <input type="text" value={this.state.content} name="content"
            onChange={(event) => this.changeContent(event)} />
        </div>
      </Page>
    )
  }
}
