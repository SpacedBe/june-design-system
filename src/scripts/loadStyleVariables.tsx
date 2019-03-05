export function loadStyleVariables(): any {
  return require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./shared_variables.scss');
}
