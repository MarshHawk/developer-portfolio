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

/*   it('renders an `.icon-star`', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    ));
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  }); */
});