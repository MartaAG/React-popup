import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Popup from '../components/popup.js'

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App/>));

  it('renders a <div/>', () => {
    expect(wrapper.find('div').length).toEqual(3)
  })
  it('should render the Popup Component', () => {
    expect(wrapper.containsMatchingElement(<Popup />)).toEqual(true);
  });
});
