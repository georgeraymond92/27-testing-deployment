import React from "react";
import renderer from "react-test-renderer";
import Counter from "../../../components/counter/counter.js";
import { shallow, mount, render } from 'enzyme';

describe("<Counter />", () => {
  it("should return false", () => {
    let component = shallow(<Counter />);
    expect(component.find('span').exists()).toBeTruthy();
  });
  it('Should increment the state', () => {
    let component = mount(<Counter />);
    let button = component.find('.btn-green');
    button.simulate('click');
    expect(component.state('count')).toEqual(1);
  })
  it('Should decrement the state', () => {
    let component = mount(<Counter />);
    let button = component.find('.btn-red');
    button.simulate('click');
    expect(component.state('count')).toEqual(-1);
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  


});
