export function loadStyleVariables(): any {
  return require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./scss/shared_variables.scss');
}
