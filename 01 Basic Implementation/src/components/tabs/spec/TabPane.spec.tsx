import * as React from 'react';
import { } from 'mocha';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { TabPane } from '../';

describe('<TabPane />', () => {

  it('should render a root div', () => {
    const wrapper = shallow(<TabPane name="foo" />);

    expect(wrapper.find('div').length).to.be.equals(1);
  });

  it(`should have class "active in" when it's selected`, () => {
    const wrapper = mount(<TabPane name="foo" selected />);

    expect(wrapper.find('div').first().hasClass('active')).to.be.true;
    expect(wrapper.find('div').first().hasClass('in')).to.be.true;
  });

  it(`should not have class "active in" when it's not selected`, () => {
    const wrapper = mount(<TabPane name="foo" />);

    expect(wrapper.find('div').first().hasClass('active')).to.be.false;
    expect(wrapper.find('div').first().hasClass('in')).to.be.false;
  });

  it(`should have class "fade" when animate is "true"`, () => {
    const animatedComponent = mount(<TabPane name="foo" animate />);
    const notAnimatedComponent = mount(<TabPane name="foo" />);

    expect(animatedComponent.find('div').first().hasClass('fade')).to.be.true;
    expect(notAnimatedComponent.find('div').first().hasClass('fade')).to.be.false;
  });

});
