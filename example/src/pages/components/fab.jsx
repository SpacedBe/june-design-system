import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Fab, IconCheck, FormikSelect, FormikCheckbox, FormikInput, FormGroup} from 'june-design-system';
import {Field, Form, Formik} from 'formik';

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
        <Formik>
          <Form>
            <p>
              The Floating Action Button accepts any children you throw at it,
              for example text or an icon.
           </p>
            <FormGroup>
              <Field
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
                component={FormikCheckbox}
              />
            </FormGroup>
            <FormGroup>
              <Field
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
                component={FormikSelect}
              />
            </FormGroup>
            <FormGroup>
              <Field
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
                component={FormikInput}
              />
            </FormGroup>
          </Form>
        </Formik>
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
