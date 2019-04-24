import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Fab, IconCheck, FormikSelect, FormikCheckbox, FormikInput} from 'june-design-system';
import {Flex} from 'reflexbox';


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
        <Flex column>
          <p>
            The Floating Action Button accepts any children you throw at it,
            for example text or an icon.
          </p>
          <Flex justify={'space-between'} align={'center'}>
            <div className={'input-group'}>
              <FormikCheckbox
                error={false}
                field={{
                  name: 'isInverted',
                  value: this.state.inverted,
                  onChange: () => this.changeInversion()
                }}
                form={{
                  errors: { 'example-input': null },
                  touched: { 'example-input': false }
                }}
                label='Inverted'
                type='checkbox'
              />
            </div>
            <div>
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
            </div>

            <div className={'input-group'}>
              <FormikSelect
                disabled={false}
                error={false}
                field={{
                  name: 'size',
                  value: this.state.size,
                  onChange: event => this.changeSize(event)
                }}
                form={{
                  errors: { 'example-input': null },
                  touched: { 'example-input': false }
                }}
                htmlFor='isSelect'
                label='Size'
                options={[
                  { label: 'small', value: 'small' },
                  { label: 'medium (default)', value: 'medium' },
                  { label: 'large', value: 'large' }
                ]}
                touched={false}
              />
            </div>
          </Flex>
        </Flex>
        <ReactSpecimen>
          <Fab size={this.state.size} inverted={this.state.inverted}>
            {this.state.content}
          </Fab>
        </ReactSpecimen>
        <ReactSpecimen>
          <Fab size={this.state.size} inverted={this.state.inverted}>
            <IconCheck />
          </Fab>
        </ReactSpecimen>
      </Page>
    );
  }
}
