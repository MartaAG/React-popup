import React from 'react';
import { shallow } from 'enzyme';
import Purposes from '../components/Purposes.js'



describe('Purposes', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Purposes />));

  it('should render a <div/>', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('renders the props', () => {
    wrapper.setProps({description: 'Lorem ipsumque'});
    expect(wrapper.find('.description-container').text()).toEqual('Lorem ipsumque')
  })
})
