/**
 * @class Popup
 */
import * as React from 'react';
import { Identifier } from 'estree';

type Props = {
  id?: string,
  label?: string,
  component?: any,
  text?: string,
  title?: string,
  visible?: boolean,
  classNames?: string[],
  placeholder?:string,

  onclick?: (id: Identifier) => void,
}

export class Popup extends React.Component<Props>{
  render(){
    return(
      <div id={this.props.id}>
          <h1>{this.props.title}</h1>
          <h3>{this.props.text}</h3>
          <p>{this.props.placeholder}</p>
        </div>

    );
  }
}
