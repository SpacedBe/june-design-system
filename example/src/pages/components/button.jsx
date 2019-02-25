import React from 'react';
import { markdown, ReactSpecimen, StateSpecimen} from 'catalog';

export default () => markdown`
# States

# Button states

  ${<ReactSpecimen span={3}>
    {/* <div>
      <label htmlFor="isRounded">Rounded?</label>
      <input type="checkbox" value={state.rounded} name="isRounded" onChange={() => setState({ rounded: !state.rounded })} />
    </div> */}
  </ReactSpecimen>}


  Are so nice

  - Yes
  - or no?
`;
