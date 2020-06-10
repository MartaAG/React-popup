import React from 'react';
import { shallow } from 'enzyme';
import FetchInformation from '../components/fetchInformation.js'
import Popup from '../components/popup.js'


describe('Popup', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Popup />));

  it('should render a <div/>', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });
  it('should render the FetchInformation Component', () => {
    expect(wrapper.containsMatchingElement(<FetchInformation/>)).toEqual(true);
  });
  
})
