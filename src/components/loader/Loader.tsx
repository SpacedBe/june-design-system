import * as React from 'react';

type Props = {
  loading: boolean,
  percentage: number,
  color?: string,
}

var classNames = require('classnames/bind');
import styles from './loader.scss';
const cx = classNames.bind(styles);

export class Loader extends React.Component<Props> {
  render() {
    const className = cx({
      loader: true,
      'pointer-events': true,
      'loader--loading': this.props.loading,
      [`loader--${this.props.color}`]: this.props.color,
    });

    return (
      <span className={className}>
        <span className="valign valign--centered">
          <span className="valign__cell">
            <span className={styles.loader__line} style={{width: this.props.percentage + '%'}}/>
          </span>
        </span>
      </span>
    );
  }
}
