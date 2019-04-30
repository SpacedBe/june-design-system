/**
 * @class Popup
 */
import * as React from 'react';
import {Button} from '../button/Button';
import styled from 'styled-components';
import {Container} from '../container/Container';
import {IconClose, IconQuestionmark} from '../../icons';
import monster from '../../assets/images/monster.png'


type Props = {
  title: string,
  show?: boolean,
  close: any,
}

const PopupStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  font-family: var(--font-secondary);
  font-size: var(--font-size-l);
  color: var(--color-primary-contrast);
  background-color: rgba(var(--color-primary-rgb), 0.95);

  text-align: center;

  @media only screen and (min-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: center;
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
  display: flex;
  flex-flow: column;
  justify-content: center;

  svg {
    fill: var(--color-white);
  }

  h3 {
    margin-top: 0;
  }

  @media only screen and (min-width: 400px) {
    justify-content: flex-start;
    background-color: var(--color-white);
    color: var(--color-dark);
    border-radius: 10px;
    padding-top: 8px;
    margin: var(--spacing-l) 0;
    max-height: 450px;

    svg {
      fill: var(--color-dark)
    }

    .contents {
      max-height: 400px;
      overflow-y: auto;
      padding: 0 var(--spacing-l) var(--spacing-l);
    }

    .text{
      width: 80%;
      margin: 0 auto;
    }
  }
`;

const MonsterStyled = styled.img`
  position: absolute;
  margin: 200px 300px
`

export class Popup extends React.Component<Props> {
  render() {
    const popup = (<PopupStyled {...this.props}>
      <Container>
        <BorderStyled>
          <ControlsStyled>
            <Button onClick={() => this.props.close()}
                    iconOnly={<IconClose fill={'white'} fontSize={'20px'}></IconClose>}></Button>
          </ControlsStyled>
          <div className={'contents'}>
            <span>
              <IconQuestionmark fontSize={'70px'}/>
            </span>
            <h3 className={'no-margin margin-bottom'}>{this.props.title}</h3>
            <div className={'text'}>
              {this.props.children}
            </div>
          </div>

        </BorderStyled>
      </Container>
      <MonsterStyled src={monster} alt=""  width="380" height="420"/>
    </PopupStyled>);

    return (
      this.props.show ? popup : ''
    );
  }
}
