/**
 * @class Popup
 */
import * as React from 'react';
import { Identifier } from 'estree';
import styles from "./popup.scss"


var classNames = require('classnames/bind');
const cx = classNames.bind(styles);

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

    const className = cx(
      'popup',
      {'popup--wide': this.props.visible},
      this.props.classNames,
    );
    return(
      <div id={this.props.id}>
          <h1>{this.props.title}</h1>
          <h3>{this.props.text}</h3>
          <p>{this.props.placeholder}</p>
        </div>

    );
  }
}
