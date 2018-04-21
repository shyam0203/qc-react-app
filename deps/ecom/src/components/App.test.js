import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { App } from './App';

import { shallow } from 'enzyme';

describe('App', () => {
  it('works', () => {
    const tree = shallow(
      <App />
    );

    expect(tree).toMatchSnapshot();
  });
});
