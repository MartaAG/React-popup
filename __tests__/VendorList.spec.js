import React from 'react';
import { shallow } from 'enzyme';
import VendorList from '../components/VendorList.js'
import Vendor from '../components/Vendor.js'
import Buttons from '../components/Buttons.js'



describe('VendorList', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<VendorList />));

  it('should render a <div/>', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Vendor and Buttons Components', () => {
    expect(wrapper.containsAllMatchingElements([<Vendor />,
    <Buttons />
    ])).toEqual(true);
  })
})
