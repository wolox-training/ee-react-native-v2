import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import UserRow from './index';

configure({ adapter: new Adapter() });

describe('UserRow', () => {
  it('button change text when state is changed', () => {
    const wrapper = shallow(<UserRow user={{ id: 1, name: 'James', active: true }} />);
    expect(wrapper.find('button').children().equals('Desactivar')).toEqual(true);
    wrapper.setState({ isActive: false });
    expect(wrapper.find('button').children().equals('Activar')).toEqual(true);
  });
  it('button change text when clicked', () => {
    const wrapper = shallow(<UserRow user={{ id:1, name: 'James', active: true }} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').children().equals('Activar')).toEqual(true);
  });
  xit('executing toggleActive method changes isActive state', () => {
    const wrapper = mount(<UserRow user={{ id: 1, name: 'James', active: true }} />);
  });
});
