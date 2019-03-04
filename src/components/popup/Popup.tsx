/**
 * @class Popup
 */
import * as React from 'react';
import { Identifier } from 'estree';
import styles from './popup.scss';
import { IconQuestionmark } from '../../icons';


var classNames = require('classnames/bind');
const cx = classNames.bind(styles);


type Props = {
  id?: string,
  label: string,
  component: any,
  text?: string,
  title?: string,
  visible?: false,
  classNames: string[],
  placeholder?:string,

  onclick?: (id: Identifier) => void,
}

export class Popup extends React.Component<Props>{
  render(){
    const className = cx(
      'popup',
      this.props.classNames,
    );
    return(
      <div className={className} id={this.props.id}>
        <IconQuestionmark></IconQuestionmark>
        <h1>{this.props.title}</h1>
        <h3>{this.props.text}</h3>
        <p>{this.props.placeholder}</p>
      </div>
    );
  }
}
