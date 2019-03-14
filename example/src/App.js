import React, {Component} from 'react';
import { Catalog, pageLoader} from 'catalog';

import {
  Button,
  IconPreferences,
  IconSavings,
  IconSettings,
  IconWater,
  IconWaterBattery,
  Stepper,
  Fab,
} from 'june-design-system';

export default class App extends Component {
  render() {
    return (
      <Catalog
        title="June Design System"
        styles={["./styles/main.css"]}
        pages={[
          {
            path: "/",
            title: "Introduction",
            content: pageLoader("./pages/intro.md")
          },
          {
            title: "Design",
            pages: [
              {
                path: "typography",
                title: "Typography",
                content: pageLoader("./pages/design/typography.md")
              },
              {
                path: "icons",
                title: "Icons",
                component: pageLoader(() =>
                  import("./pages/components/icons")
                ),
                imports: {
                  IconPreferences,
                  IconSavings,
                  IconSettings,
                  IconWater,
                  IconWaterBattery
                }
              }
            ]
          },
          {
            title: "Components",
            pages: [
              {
                path: "buttons",
                title: "Buttons",
                component: pageLoader(() =>
                  import("./pages/components/button")
                ),
                imports: {
                  Button,
                  IconSettings
                }
              },
              {
                path: "fab",
                title: "FAB",
                component: pageLoader(() =>
                  import("./pages/components/fab")
                ),
                imports: {
                  Fab
                }
              },
              {
                path: "stepper",
                title: "Stepper",
                component: pageLoader(() =>
                  import("./pages/components/stepper")
                ),
                imports: {
                  Stepper,
                  IconSettings
                }
              },
              {
                path: "tooltip",
                title: "Tooltip",
                component: pageLoader(() =>
                  import("./pages/components/tooltip")
                )
              }
            ]
          },
          {
            title: "Form",
            pages: [
              {
                path: "input",
                title: "Input",
                component: pageLoader(() =>
                  import("./pages/form/formikInput")
                )
              },
              {
                path: "select",
                title: "Select",
                component: pageLoader(() =>
                  import("./pages/form/formikSelect")
                )
              },
              {
                path: "toggle",
                title: "Toggle",
                component: pageLoader(() =>
                  import("./pages/form/formikToggle")
                )
              },
              {
                path: "autocomplete",
                title: "Autocomplete",
                component: pageLoader(() =>
                  import("./pages/form/formikAutocomplete")
                )
              },
              {
                path: "radiobutton",
                title: "Radiobutton",
                component: pageLoader(() =>
                  import("./pages/form/formikRadiobutton")
                )
              },
              {
                path: "form",
                title: "Form",
                component: pageLoader(() =>
                  import("./pages/form/formikForm")
                )
              }
            ]
          }
        ]}
      />
    );
  }
}
