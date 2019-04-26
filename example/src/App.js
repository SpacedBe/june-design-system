import React, {Component} from 'react';
import {Catalog, pageLoader} from 'catalog';
import logo from './assets/images/june-logo.svg';

import {
  Button,
  IconPreferences,
  IconSavings,
  IconSettings,
  IconWater,
  IconWaterBattery,
  IconPhone,
  IconMail,
  IconChat,
  Stepper,
  Fab,
} from 'june-design-system';

import { hot } from 'react-hot-loader/root';

class App extends Component {
  render() {
    return (
      <Catalog
        title='June Design System'
        logoSrc={logo}
        theme={
          {
            pageHeadingBackground: "var(--color-primary)",
            pageHeadingTextColor: "#f6f6f6",
            pageHeadingHeight: 250,
            sidebarColorText: "var(--color-dark)",
            sidebarColorTextActive: "#e85257",
            fontFamily: "var(--font-primary)",
            fontHeading: "var(--font-secondary)",
            fontWeight: "var(--font-weight-bold)",
            navBarTextColor: "#3d8279",
            navBarBackground: "#f6f6f6"
          }
        }
        pages={[
          {
            path: '/',
            title: 'Introduction',
            content: pageLoader('./pages/intro.md')
          },
          {
            title: 'Design',
            pages: [
              {
                path: 'typography',
                title: 'Typography',
                component: pageLoader(() =>
                  import('./pages/components/typograph')
                )
              },
              {
                path: 'colors',
                title: 'Colors',
                content: pageLoader('/pages/design/colors.md')
              },
              {
                path: 'icons',
                title: 'Icons',
                component: pageLoader(() =>
                  import('./pages/components/icons')
                ),
                imports: {
                  IconPreferences,
                  IconSavings,
                  IconSettings,
                  IconWater,
                  IconWaterBattery,
                  IconPhone,
                  IconChat,
                  IconMail
                }
              }
            ]
          },
          {
            title: 'Layout',
            pages: [
              {
                path: 'container',
                title: 'Containers',
                content: pageLoader('/pages/layout/container.md'),
                imports: {}
              },
            ]
          },
          {
            title: 'Components',
            pages: [
              {
                path: 'buttons',
                title: 'Buttons',
                component: pageLoader(() =>
                  import('./pages/components/button')
                ),
                imports: {
                  Button,
                  IconSettings
                }
              },
              {
                path: 'fab',
                title: 'FAB',
                component: pageLoader(() =>
                  import('./pages/components/fab')
                ),
                imports: {
                  Fab
                }
              },
              {
                path: 'stepper',
                title: 'Stepper',
                component: pageLoader(() =>
                  import('./pages/components/stepper')
                ),
                imports: {
                  Stepper,
                  IconSettings
                }
              },
              {
                path: 'popup',
                title: 'Popup',
                component: pageLoader(() =>
                  import('./pages/components/popup')
                )
              },
              {
                path: 'separator',
                title: 'Separator',
                component: pageLoader(() =>
                  import('./pages/components/separator')
                )
              },
              {
                path: 'counter',
                title: 'Counter',
                component: pageLoader(() =>
                  import('./pages/components/counter')
                )
              },
              {
                path: 'header',
                title: 'Header',
                component: pageLoader(() =>
                  import('./pages/components/header')
                )
              },
              {
                path: 'footer',
                title: 'Footer',
                component: pageLoader(() =>
                  import('./pages/components/footer')
                )
              },
              {
                path: 'snackbar',
                title: 'Snackbar',
                component: pageLoader(() =>
                  import('./pages/components/snackbar')
                )
              }
            ]
          },
          {
            title: 'Form',
            pages: [
              {
                path: 'formGroup',
                title: 'Form Group',
                component: pageLoader(() =>
                  import('./pages/form/formGroup')
                )
              },
              {
                path: 'input',
                title: 'Input',
                component: pageLoader(() =>
                  import('./pages/form/formikInput')
                )
              },
              {
                path: 'textarea',
                title: 'Textarea',
                component: pageLoader(() =>
                  import('./pages/form/formikTextarea.jsx')
                )
              },
              {
                path: 'select',
                title: 'Select',
                component: pageLoader(() =>
                  import('./pages/form/formikSelect')
                )
              },
              {
                path: 'autofill',
                title: 'Autofill',
                component: pageLoader(() =>
                  import('./pages/form/formikAutofill.jsx')
                )
              },
              {
                path: 'formError',
                title: 'Form Error',
                component: pageLoader(() =>
                  import('./pages/form/formError')
                )
              },
              {
                path: 'toggle',
                title: 'Toggle',
                component: pageLoader(() =>
                  import('./pages/form/formikToggle')
                )
              },
              {
                path: 'radiobutton',
                title: 'Radiobutton',
                component: pageLoader(() =>
                  import('./pages/form/formikRadiobutton')
                )
              },
              {
                path: 'checkbox',
                title: 'Checkbox',
                component: pageLoader(() =>
                  import('./pages/form/formikCheckbox')
                )
              },
              {
                path: 'formExample',
                title: 'Example of a form',
                component: pageLoader(() =>
                  import('./pages/form/formikForm')
                )
              }
            ]
          }
        ]}
      />
    );
  }
}

export default hot(App);
