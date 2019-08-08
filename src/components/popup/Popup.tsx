/**
 * @class Popup
 */
import React from 'react';
import {Button} from '../button/Button';
import styled from 'styled-components';
import {Container} from '../container/Container';
import {IconClose, IconQuestionmark} from '../../icons';
// @ts-ignore
import monster from '../../assets/images/monster.png';

type Props = {
  title: string,
  show?: boolean,
  close: any,
  hideHeadingIcon?: boolean,
}

const PopupStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  font-family: var(--font-secondary);
  font-size: var(--font-size-l);
  color: var(--color-dark);
  background-color: var(--color-white);
  text-align: center;
`;

const ControlsStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  
  Button {
    padding: var(--spacing-l);
  }
`;

const BorderStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;

  svg {
    fill: var(--color-dark);
  }
`;

const MonsterStyled = styled.img`
  @media screen and (max-width: 1000px) {
    display: none;
  }
  
  @media screen and (max-height: 400px) {
    display: none;
  }
  
  position: fixed;
  bottom: -160px;
  right: 25px;
`;

const RelativeStyled = styled.div`
  position: relative;
  height: 100%;
  overflow: auto;
`;

export class Popup extends React.Component<Props> {
  render() {
    const popup = (
      <PopupStyled {...this.props}>
        <RelativeStyled>
          <ControlsStyled>
            <Button
              onClick={() => this.props.close()}
              iconOnly={<IconClose fill={'black'} fontSize={'var(--icon-size-xs)'}/>}>
            </Button>
          </ControlsStyled>
          <Container>
            <BorderStyled>
                {!this.props.hideHeadingIcon ? (
                  <span>
                    <IconQuestionmark fontSize={'var(--icon-size-l)'}/>
                  </span>
                ) : ''}
                <h2 className={'no-margin margin-bottom'}>
                  {this.props.title}
                </h2>
                <div>{this.props.children}</div>
            </BorderStyled>
          </Container>
          <MonsterStyled src={monster} width='380' height='420' />
        </RelativeStyled>
      </PopupStyled>
    );

    return (
      this.props.show ? popup : ''
    );
  }
}
