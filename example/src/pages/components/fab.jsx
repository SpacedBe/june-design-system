import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Fab, IconCheck} from 'june-design-system';

export default class FabPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 'medium',
      content: 'Hi!',
      inverted: false,
    };
  }

  changeSize(event) {
    this.setState({size: event.target.value})
  }

  changeContent(event) {
    this.setState({content: event.target.value})
  }

  changeInversion() {
    this.setState({inverted: !this.state.inverted})
  }

  render() {
    return (
      <Page>
        ## FAB

        <p>The Floating Action Button accepts any children you throw at it, for example text or an icon.</p>
        <ReactSpecimen>
          <Fab size={this.state.size} inverted={this.state.inverted}>
            {this.state.content}
          </Fab>
        </ReactSpecimen>
        <ReactSpecimen>
          <Fab size={this.state.size} inverted={this.state.inverted}>
            <IconCheck/>
          </Fab>
        </ReactSpecimen>
        <div>
          <div className={'input-group'}>
            <label htmlFor="content">Content</label>
            <input type="text" value={this.state.content} name="content"
                   onChange={(event) => this.changeContent(event)}/>
          </div>

          <div className={'input-group'}>
            <label htmlFor="size">Size</label>
            <select name="size" value={this.state.size} onChange={(event) => this.changeSize(event)}>
              <option value="small">small</option>
              <option value="medium">medium (default)</option>
              <option value="large">large</option>
            </select>
          </div>

          <div className={'input-group'}>
            <label htmlFor="inverted">Inverted?</label>
            <input type="checkbox" value={this.state.inverted} name="isInverted" onChange={() => this.changeInversion()}/>
          </div>
        </div>
      </Page>
    )
  }
}
