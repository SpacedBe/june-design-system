import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

export default class ButtonPage extends React.Component {
  render(){
    return (
      <Page>
        <ReactSpecimen>
          <h1>H1: The quick brow fox jumps over the lazy dog</h1>
        </ReactSpecimen>

        <ReactSpecimen>
          <h2>H2: The quick brow fox jumps over the lazy dog</h2>
        </ReactSpecimen>

        <ReactSpecimen>
          <h3>H3: The quick brow fox jumps over the lazy dog</h3>
        </ReactSpecimen>

        <ReactSpecimen>
          <h4>H4: The quick brow fox jumps over the lazy dog</h4>
        </ReactSpecimen>

        <ReactSpecimen>
          <h5>H5: The quick brow fox jumps over the lazy dog</h5>
        </ReactSpecimen>

        <ReactSpecimen>
          <h6>H6: The quick brow fox jumps over the lazy dog</h6>
        </ReactSpecimen>

        <ReactSpecimen>
          <div>
            <p>body text</p>
            <p>P: The quick brow fox jumps over the lazy dog</p>
          </div>
        </ReactSpecimen>

        <ReactSpecimen>
          <div>
            <p className={'underline'}>Hyperlinks / links</p>
            <p className={'underline'}>
              Hyperlink: The quick brow fox jumps over the lazy dog{' '}
            </p>
          </div>
        </ReactSpecimen>

        <ReactSpecimen>
          <div>
            <p className={'small'}>
              Kleine tekstjes, voorwaarden / labels / input
            </p>
            <p className={'small'}>
              Small: The quick brow fox jumps over the lazy dog{' '}
            </p>
          </div>
        </ReactSpecimen>

        <ReactSpecimen>
          <div>
            <p className={'mini'}>Stepper items</p>
            <p className='mini'>
              Mini: The quick brow fox jumps over the lazy dog
            </p>
          </div>
        </ReactSpecimen>

          <ReactSpecimen>
          <div>
              <p className={'legal'}>Legal text</p>
              <p className='legal'>
                  The quick brow fox jumps over the lazy dog
              </p>
          </div>
      </ReactSpecimen>
      </Page>
    );
  }
}
