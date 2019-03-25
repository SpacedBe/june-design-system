# june-design-system

> Design system for June, including a component library

[![NPM](https://img.shields.io/npm/v/june-design-system.svg)](https://www.npmjs.com/package/june-design-system) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save june-design-system
```

or 
```
npm link path-to-/june-design-system/
```


# Style variables
Because we use Styled Components we created a way to access SCSS variables in React components.
To load the variables call the ```loadStyleVariables()``` function and an array of variable-value pairs will be returned.   

# SVG
We transform SVGs into React components using [SVGR](https://github.com/smooth-code/svgr).

To generate a React-component from a svg file, place the svg file in ```src/icons/src```
and then run the following yarn task:

```bash
yarn run generate-icons
```
