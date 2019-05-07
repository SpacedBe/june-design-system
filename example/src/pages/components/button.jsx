import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Button, IconSettings, FormikCheckbox, FormikSelect, FormGroup} from 'june-design-system';
import {Flex} from 'reflexbox';
import {Field, Form, Formik} from 'formik';

export default class ButtonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rounded: false,
      outlined: false,
      clear: false,
      disabled: false,
      loading: false,
      icon: '',
      size: 'medium',
      content: 'Button',
      color: 'primary',
      wide: false,
      selectedColor: '',
      clicked: 0
    };
  }

  changeRounded() {
    this.setState({
      rounded: !this.state.rounded,
    });
  }

  changeOutline() {
    this.setState({
      outlined: !this.state.outlined
    });
  }

  changeClear() {
    this.setState({
      clear: !this.state.clear
    });
  }

  changeDisable() {
    this.setState({
      disabled: !this.state.disabled
    });
  }

  changeLoading() {
    this.setState({
      loading: !this.state.loading
    });
  }

  changeWide() {
    this.setState({
      wide: !this.state.wide
    });
  }

  changeColor(event) {
    this.setState({color: event.target.value})
  }

  changeSize(event) {
    this.setState({size: event.target.value})
  }

  changeIcon(event) {
    this.setState({icon: event.target.value})
  }

  changeClicked() {
    this.setState({
      clicked: this.state.clicked + 1
    });
  }

  render() {
    return (
        <Page>
          <Formik>
            <Form>
              <Flex justify={'space-between'} column>
                <Flex row wrap>
                  <FormGroup className={'wrapper'}>
                    <Field
                      field={{
                        name: 'isRounded',
                        value: this.state.rounded,
                        onChange: () => this.changeRounded()
                      }}
                      form={{
                        errors: { 'example-input': null },
                        touched: { 'example-input': false }
                      }}
                      label='Rounded'
                      type='checkbox'
                      component={FormikCheckbox}
                    />
                  </FormGroup>

                  <FormGroup className={'wrapper'}>
                    <Field
                      error={false}
                      field={{
                        name: 'isDisabled',
                        value: this.state.disabled,
                        onChange: () => this.changeDisable()
                      }}
                      form={{
                        errors: { 'example-input': null },
                        touched: { 'example-input': false }
                      }}
                      label='Disabled'
                      type='checkbox'
                      component={FormikCheckbox}
                    />
                  </FormGroup>
                  <FormGroup className={'wrapper'}>
                    <Field
                      error={false}
                      field={{
                        name: 'isLoading',
                        value: this.state.loading,
                        onChange: () => this.changeLoading()
                      }}
                      form={{
                        errors: { 'example-input': null },
                        touched: { 'example-input': false }
                      }}
                      label='Loading'
                      type='checkbox'
                      component={FormikCheckbox}
                    />
                  </FormGroup>

                  <FormGroup className={'wrapper'}>
                    <Field
                      error={false}
                      field={{
                        name: 'isOutlined',
                        value: this.state.outlined,
                        onChange: () => this.changeOutline()
                      }}
                      form={{
                        errors: { 'example-input': null },
                        touched: { 'example-input': false }
                      }}
                      label='Outlined'
                      type='checkbox'
                      component={FormikCheckbox}
                    />
                  </FormGroup>

                  <FormGroup className={'wrapper'}>
                    <Field
                      error={false}
                      field={{
                        name: 'isClear',
                        value: this.state.clear,
                        onChange: () => this.changeClear()
                      }}
                      form={{
                        errors: { 'example-input': null },
                        touched: { 'example-input': false }
                      }}
                      label='Clear'
                      type='checkbox'
                      component={FormikCheckbox}
                    />
                  </FormGroup>

                  <FormGroup className={'wrapper'}>
                    <Field
                      error={false}
                      field={{
                        name: 'isFullWidth',
                        value: this.state.wide,
                        onChange: () => this.changeWide()
                      }}
                      form={{
                        errors: { 'example-input': null },
                        touched: { 'example-input': false }
                      }}
                      label='Full Width'
                      type='checkbox'
                      component={FormikCheckbox}
                    />
                  </FormGroup>
                </Flex>
                <Flex>
                  <FormGroup className={'wrapper'}>
                      <Field
                        disabled={false}
                        error={false}
                        field={{
                          name: 'color',
                          value: this.state.color,
                          onChange: event => this.changeColor(event)
                        }}
                        form={{
                          errors: { 'example-input': null },
                          touched: { 'example-input': false }
                        }}
                        htmlFor='isSelect'
                        label='Color'
                        options={[
                          { label: 'green', value: 'primary' },
                          { label: 'red', value: 'error' },
                          { label: 'facebook', value: 'facebook' },
                          { label: 'google', value: 'google' }
                        ]}
                        touched={false}
                        component={FormikSelect}
                      />
                  </FormGroup>

                  <FormGroup className={'wrapper'}>
                    <Field
                      disabled={false}
                      error={false}
                      field={{
                        name: 'Icon',
                        value: this.state.icon,
                        onChange: event => this.changeIcon(event)
                      }}
                      form={{
                        errors: { 'example-input': null },
                        touched: { 'example-input': false }
                      }}
                      htmlFor='isSelect'
                      label='Icon'
                      options={[
                        { label: 'Icon on the left', value: 'left' },
                        { label: 'Icon on the right', value: 'right' },
                        { label: 'Only an icon', value: 'only' },
                        { label: 'No icon', value: '' },
                      ]}
                      touched={false}
                      component={FormikSelect}
                    />
                  </FormGroup>

                  <FormGroup className={'wrapper'}>
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
                        { label: 'medium', value: 'medium' },
                        { label: 'large', value: 'large' }
                      ]}
                      touched={false}
                      component={FormikSelect}
                    />
                  </FormGroup>
                </Flex>
              </Flex>
            </Form>
          </Formik>
          <ReactSpecimen>
              <Button
                size={this.state.size}
                rounded={this.state.rounded}
                outlined={this.state.outlined}
                clear={this.state.clear}
                disabled={this.state.disabled}
                loading={this.state.loading}
                wide={this.state.wide}
                color={this.state.color}
                iconLeft={this.state.icon === 'left' ? <IconSettings/> : ''}
                iconRight={this.state.icon === 'right' ? <IconSettings/> : ''}
                iconOnly={this.state.icon === 'only' ? <IconSettings/> : ''}>
                {this.state.content}
              </Button>
            </ReactSpecimen>
          # Click events
          <p>Clicked {this.state.clicked} times</p>
          <ReactSpecimen>
            <Button
              htmlfor='isClicked'
              onClick={() => this.changeClicked()}
            >
              Click
            </Button>
          </ReactSpecimen>
        </Page>
    );
  }
}
