import React from 'react';
import { shallow } from 'enzyme';

import StudentFilter from './StudentFilter';

it('Test StudentFilter component', () => {
    expect(shallow(<StudentFilter />)).toMatchSnapshot();
});

it('Test state and props', () => {
    const wrapper = shallow(<StudentFilter onFilterHandler={function () { }} />)
    wrapper.find('[name="standard"]').simulate('change', { target: { value: 'Standard 2', name: 'standard' } });
    expect(wrapper.state()).toEqual({
        filters: {
            school: '',
            standard: 'Standard 2',
            division: ''
        }
    })
    // expect(wrapper.props().onFilterHandler).toEqual(function () { })
});