import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import UserList from './index';

configure({ adapter: new Adapter() });

describe('UserList', () => {
  xit('shows new user when props are changed', () => {
    const users = [
      {
        id: 1,
        name: 'User 1',
        active: true
      },
      {
        id: 2,
        name: 'User 2',
        active: false
      }
    ];
    const wrapper = shallow(<UserList users={users}/>);
  });
  it('setProps makes componentDidUpdate to be executed', () => {
    jest.spyOn(UserList.prototype, 'componentDidUpdate');
    const wrapper = mount(<UserList />);
    wrapper.setProps({ hello: 'hello' });
    expect(UserList.prototype.componentDidUpdate).toHaveBeenCalled();
    UserList.prototype.componentDidUpdate.mockRestore();
  });
});
