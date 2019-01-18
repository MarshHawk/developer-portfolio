import React from 'react';
import { shallow } from 'enzyme';

import RootComponent from '../../components/rootComponent';
import MenuBar from '../../components/menuBarComponent';

//Shallow Render tests
describe('<RootComponent />', () => {
  it('renders a <MenuBar /> components', () => {
    const wrapper = shallow(<RootComponent />);
    expect(wrapper.find(MenuBar)).toHaveLength(1);
  });
});