import * as React from "react";
import styled from "styled-components";

type Props = {
  color?: string
}

export class Spinner extends React.Component<Props> {
  static defaultProps = {
    color: '#fff',
  };

  render() {
    const SpinnerStyled = styled.div`
      display: inline-block;
      position: relative;
      width: 25px;
      height: 25px;
      
      div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 25px;
        height: 25px;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border: 3px solid;
        border-radius: 50%;
        border-color: ${this.props.color} transparent transparent transparent;
      }
      div:nth-child(1) {
        animation-delay: -0.45s;
      }
      div:nth-child(2) {
        animation-delay: -0.3s;
      }
      div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
`;

    return (
      <SpinnerStyled>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </SpinnerStyled>
    );
  }
}
