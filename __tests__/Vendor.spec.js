import React from 'react';
import { shallow } from 'enzyme';
import Vendor from '../components/Vendor.js'



describe('Vendor', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Vendor />));

  it('should render a <li/>', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });
  it('should render an <input />', () => {
    expect(wrapper.find('input').length).toEqual(1);
  })
})
