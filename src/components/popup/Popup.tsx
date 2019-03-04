/**
 * @class Popup
 */
import * as React from 'react';
import styles from './popup.scss';

var classNames = require('classnames/bind');
const cx = classNames.bind(styles);

type Props = {
  id?: string,
  label: string,
  component: any,
  text?: string,
  title?: string,
  show?: boolean,
  classNames: string[],
  placeholder?:string,
  className?: string,
  img: string,

  close: () => void,
}

export class Popup extends React.Component<Props>{
  render(){

    const className = cx(
      'popup',
      {'afterClick': this.props.className},
      {'afterClick--p': this.props.placeholder},
      this.props.classNames,
    );
    return(
      <div className={className} id={this.props.id}>
        <div className={styles.block}>
            <h1>{this.props.title}</h1>
            <h3>{this.props.text}</h3>
            <p className={styles.p}>{this.props.placeholder}</p>
            <button onClick={() => this.props.close()}>close</button>
            <img src={this.props.img}></img>
        </div>
      </div>
    );
  }
}
