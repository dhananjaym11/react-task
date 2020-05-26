import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

it('Test header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
});