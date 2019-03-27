import React from 'react';
import { Page } from 'catalog';
import {Container} from 'june-design-system';

export default class ButtonPage extends React.Component {

  render(){
    return (
      <Page>
        <Container>
          <h1>H1: The quick brow fox jumps over the lazy dog</h1>
          <h2>H2: The quick brow fox jumps over the lazy dog</h2>
          <h3>H3: The quick brow fox jumps over the lazy dog</h3>
          <br/>
            <h4>Grote titles</h4>
            <h4>H4: The quick brow fox jumps over the lazy dog</h4>

          <br />
            <h5>Subtitels</h5>
            <h5>H5: The quick brow fox jumps over the lazy dog</h5>
            <h6>H6: The quick brow fox jumps over the lazy dog</h6>
          <br/>
            <p>body text</p>
            <p>P: The quick brow fox jumps over the lazy dog</p>
          <br/>
              <p className={"underline"}>Hyperlinks / links</p>
              <p className={"underline"}>Hyperlink: The quick brow fox jumps over the lazy dog </p>
          <br/>
              <p className={"small"}>Kleine tekstjes, voorwaarden / labels / input</p>
              <p className={"small"}>Small: The quick brow fox jumps over the lazy dog </p>
          <br/>
              <p className={"mini"}>Stepper items</p>
              <p className={"mini"}>Mini: The quick brow fox jumps over the lazy dog</p>

        </Container>
      </Page>
    );
  }
}
