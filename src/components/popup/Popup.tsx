/**
 * @class Popup
 */
import React from 'react';
import {Button} from '../button/Button';
import styled from 'styled-components';
import {Container} from '../container/Container';
import {IconClose, IconQuestionmark} from '../../icons';
// @ts-ignore
import monster from "../../assets/images/monster.png";

type Props = {
  title: string,
  show?: boolean,
  close: any,
  headingIcon?: boolean,
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
  background-color: rgba(var(--color-white-rgb), 0.95);
  text-align: center;

  @media only screen and (min-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary-contrast);
    background-color: rgba(var(--color-primary-rgb), 0.95);
  }
`;

const ControlsStyled = styled.div`
 display: flex;
 justify-content: flex-end;

  @media only screen and (min-width: 400px) {
    padding: var(--spacing-s) var(--spacing-s) 0;
  }
`;

const BorderStyled = styled.div`
  --close-button-color: var(--color-primary);
  
  display: flex;
  flex-flow: column;
  justify-content: center;
  
  .contents {
    margin-top: var(--spacing-l);
  }

  svg {
    fill: var(--close-button-color);
  }

  @media only screen and (min-width: 400px) {
      --close-button-color: var(--color-dark);

    justify-content: flex-start;
    background-color: var(--color-white);
    color: var(--color-dark);
    border-radius: 10px;
    padding-top: 8px;
    margin: var(--spacing-l) 0;
    max-height: 450px;

    .contents {
      margin: 0;
      max-height: 400px;
      overflow-y: auto;
      padding: 0 var(--spacing-xl) var(--spacing-xl);
    }
  }
`;

const MonsterStyled = styled.img`
  @media screen and (max-width: 1000px) {
    display: none;
  }
  position: absolute;
  top: 55%;
  left: 70%;
`;

const RelativeStyled = styled.div`
  position: relative;
`;

const ContainerStyled = styled(Container)`
  padding: var(--spacing-m);
`;

export class Popup extends React.Component<Props> {
  render() {
    const popup = (
      <PopupStyled {...this.props}>
        <RelativeStyled>
          <ContainerStyled>
            <BorderStyled>
              <ControlsStyled>
                <Button
                  onClick={() => this.props.close()}
                  iconOnly={<IconClose fontSize={'var(--icon-size-xs)'}/>}
                />
              </ControlsStyled>
              <div className={'contents'}>
                {this.props.headingIcon ? (
                  <span>
                    <IconQuestionmark fontSize={'var(--icon-size-l'}/>
                  </span>
                ) : ''}
                <h2 className={'no-margin margin-bottom'}>
                  {this.props.title}
                </h2>
                <div>{this.props.children}</div>
              </div>
            </BorderStyled>
          </ContainerStyled>
          <MonsterStyled src={monster} width='380' height='420' />
        </RelativeStyled>
      </PopupStyled>
    );

    return (
      this.props.show ? popup : ''
    );
  }
}
