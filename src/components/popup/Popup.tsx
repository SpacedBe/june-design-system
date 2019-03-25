/**
 * @class Popup
 */
import * as React from 'react';
// import styles from './popup.scss';
import { Button } from '../button/Button';
import { IconClose } from '../../icons';

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

    return(
      <div className={this.props.className} id={this.props.id}>
        <div>
            <h1>{this.props.title}</h1>
            <h3>{this.props.text}</h3>
            <p >{this.props.placeholder}</p>
            <Button  onClick={() => this.props.close()} iconOnly={<IconClose></IconClose>}></Button>
            <img width="300" src={this.props.img}></img>
        </div>
      </div>
    );
  }
}
