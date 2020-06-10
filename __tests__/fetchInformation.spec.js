import React from 'react';
import { shallow } from 'enzyme';
import FetchInformation from '../components/fetchInformation.js'
import VendorList from '../components/VendorList.js'
import Purposes from '../components/Purposes.js'



describe('FetchInformation', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<FetchInformation />));

  it('should render a <div/>', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the VendorList and Purposes Components', () => {
    expect(wrapper.containsAllMatchingElements([
      <Purposes/>,
      <VendorList />
    ])).toEqual(true);
  })
})
