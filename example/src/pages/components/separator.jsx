import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Separator, FormikInput } from 'june-design-system';
import { Flex } from 'reflexbox'

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
    return (
      <Page>
        ## Separator
        <ReactSpecimen span={3}>
          <Separator>{this.state.content}</Separator>
        </ReactSpecimen>

        <div className={'input-group'}>
          <FormikInput
            disabled={false}
            error={false}
            field={{
              name: 'content',
              value: this.state.content,
              onChange: event => this.changeContent(event)
            }}
            form={{
              errors: { 'example-input': null },
              touched: { 'example-input': false }
            }}
            label='Content'
            placeholderText='example placeholder'
            required
            type='text'
          />
        </div>
      </Page>
    );
  }
}
