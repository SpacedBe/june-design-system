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

  onclick?: (id: Identifier) => void,
}

export class Popup extends React.Component<Props>{
  render(){
    return(

        <div id={this.props.id}>
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
        </div>

    );
  }
}
