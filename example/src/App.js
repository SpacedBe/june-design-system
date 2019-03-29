import React, {Component} from 'react';
import {Catalog, pageLoader} from 'catalog';

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
                content: pageLoader("/pages/design/typography.md")
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
            title: "Layout",
            pages: [
              {
                path: "container",
                title: "Containers",
                content: pageLoader("/pages/layout/container.md"),
                imports: {}
              },
                {
                path: "typograph",
                title: "Typograph",
                component: pageLoader(() =>
                  import("./pages/components/typograph")
                ),
              },
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
              },
              {
                path: "separator",
                title: "Separator",
                component: pageLoader(() =>
                  import("./pages/components/separator")
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
                path: "textarea",
                title: "Textarea",
                component: pageLoader(() =>
                  import("./pages/form/formikTextarea.jsx")
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
                path: "radiobutton",
                title: "Radiobutton",
                component: pageLoader(() =>
                  import("./pages/form/formikRadiobutton")
                )
              },
              {
                path: "checkbox",
                title: "Checkbox",
                component: pageLoader(() =>
                  import("./pages/form/formikCheckbox")
                )
              },
               {
                path: "fixedFooter",
                title: "FixedFooter",
                component: pageLoader(() =>
                  import("./pages/form/formikFixedFooter")
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
