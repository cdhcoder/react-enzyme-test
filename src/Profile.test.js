import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const wrapper = mount(<Profile username="cdhcoder" name="cdh" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders username and name', () => {
        const wrapper = mount(<Profile username="cdhcoder" name="cdh" />);

        // Props 접근
        expect(wrapper.props().username).toBe('cdhcoder');
        expect(wrapper.props().name).toBe('cdh');

        // DOM 확인
        const boldElement = wrapper.find('b');
        expect(boldElement.contains('cdhcoder')).toBe(true);
        const spanElement = wrapper.find('span');
        expect(spanElement.text()).toBe('(cdh)');        

    });
});