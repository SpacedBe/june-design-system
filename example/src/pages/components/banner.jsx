import React from "react";
import {Page, ReactSpecimen} from "catalog";
import {Banner, FormGroup, FormikSelect} from 'june-design-system';
import {Field, Form, Formik} from "formik";

export default class BannerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'orange'
        }
    }

    updateDropdownState(name, event) {
        this.setState({
            [name]: event.target.value,
        });
    }

    render() {
        return (
            <Page>

                <Formik>
                    <Form>
                        <p>
                            A banner can be used to draw a user's attention. It transcludes its content.
                        </p>
                        <FormGroup className={'wrapper'}>
                            <Field
                                disabled={false}
                                error={false}
                                field={{
                                    name: 'color',
                                    value: this.state.color,
                                    onChange: event => this.updateDropdownState('color', event)
                                }}
                                form={{
                                    errors: {'example-input': null},
                                    touched: {'example-input': false}
                                }}
                                htmlFor='isSelect'
                                label='Color'
                                options={[
                                    {label: 'orange (default)', value: 'orange'},
                                    {label: 'green', value: 'primary'},
                                    {label: 'red', value: 'error'},
                                    {label: 'facebook', value: 'facebook'},
                                    {label: 'google', value: 'google'}
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
                                    name: 'density',
                                    value: this.state.density,
                                    onChange: event => this.updateDropdownState('density', event)
                                }}
                                form={{
                                    errors: {'example-input': null},
                                    touched: {'example-input': false}
                                }}
                                htmlFor='isSelect'
                                label='Density'
                                options={[
                                    {label: 'loose (default)', value: 'loose'},
                                    {label: 'medium', value: 'medium'},
                                    {label: 'tight', value: 'tight'},
                                ]}
                                touched={false}
                                component={FormikSelect}
                            />
                        </FormGroup>
                    </Form>
                </Formik>

                <ReactSpecimen>
                    <Banner color={this.state.color} density={this.state.density}>
                        <h1>Example</h1>
                        <p className='no-margin'>this is banner content</p>
                    </Banner>
                </ReactSpecimen>
            </Page>
        )
    }
}
