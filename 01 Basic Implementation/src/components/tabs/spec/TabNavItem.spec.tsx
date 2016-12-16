import * as React from 'react';
import { } from 'mocha';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { TabNavItem } from '../';

describe('<TabNavItem tests', () => {
  it('should render a root list item element', () => {
    const props = {
      selected: false,
      name: 'foo',
      onClick: () => { },
      disabled: false,
    };
    const wrapper = shallow(<TabNavItem {...props} />);

    expect(wrapper.find('li').first().length).to.be.equals(1);
    expect(wrapper.find('li').first().prop('role')).to.be.equals('presentation');
    expect(wrapper.find('li').first().prop('onClick')).to.be.a.instanceOf(Function);
    expect(wrapper.find('li').first().prop('className')).to.be.equals('');
  });

  it('should have an anchor child', () => {
    const props = {
      selected: false,
      name: 'foo',
      onClick: () => { },
      disabled: false,
    };
    const wrapper = shallow(<TabNavItem {...props} />);

    expect(wrapper.children().length).to.be.equals(1);
    expect(wrapper.childAt(0).type()).to.be.equals('a');
    expect(wrapper.childAt(0).prop('href')).to.be.equals('#');
    expect(wrapper.childAt(0).prop('aria-controls')).to.be.equals('foo');
    expect(wrapper.childAt(0).prop('aria-selected')).to.be.false;
    expect(wrapper.childAt(0).prop('role')).to.be.equals('tab');
    expect(wrapper.childAt(0).prop('data-toggle')).to.be.equals('tab');
  });

  it('should render the "name" text inside anchor', () => {
    const props = {
      selected: false,
      name: 'Home',
      onClick: () => { },
      disabled: false,
    };
    const wrapper = shallow(<TabNavItem {...props} />);

    expect(wrapper.childAt(0).text()).to.be.equals('Home');
  });

  it('should have an "active" className on list item if is selected', () => {
    const props = {
      selected: true,
      name: 'foo',
      onClick: () => { },
      disabled: false,
    };

    const wrapper = shallow(<TabNavItem {...props} />);

    expect(wrapper.find('li').first().prop('className')).to.be.equals('active');
  });

  it('should trigger the "onClick" when list item is clicked', () => {
    const onClickHandler = sinon.spy();
    const props = {
      selected: false,
      name: 'foo',
      onClick: onClickHandler,
      disabled: false,
    };
    const wrapper = shallow(<TabNavItem {...props} />);
    const result = wrapper.find('li').simulate('click');

    expect(onClickHandler.calledOnce).to.be.true;

  });

});
