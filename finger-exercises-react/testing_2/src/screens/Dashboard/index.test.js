import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Dashboard from './index';

configure({ adapter: new Adapter() });

describe('Dashboard', () => {
  it('first h1 text should be "Welcome to React"', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('h1').first().text()).toEqual('Welcome to React');
  });
  it('parent of the logo should be a header', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('.App-logo').parent().is('header')).toEqual(true);
  });
  xit('componentDidMount is called once', () => {
  })
});
