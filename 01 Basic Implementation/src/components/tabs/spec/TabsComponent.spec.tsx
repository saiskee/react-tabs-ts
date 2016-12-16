import * as React from 'react';
import { } from 'mocha';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { TabsComponent, TabPane, TabNavItem } from '../';

describe('<TabsComponent /> tests', () => {
  it('should render a navigation bar', () => {
    const wrapper = shallow(<TabsComponent />);

    const navBar = wrapper.childAt(0);
    expect(navBar.type()).to.be.equals('ul');
    expect(navBar.hasClass('nav')).to.be.true;
    expect(navBar.hasClass('nav-tabs')).to.be.true;
    expect(navBar.prop('role')).to.be.equals('tablist');
  });

  it('should render a div for containing panels', () => {
    const wrapper = shallow(<TabsComponent />);

    const paneContainer = wrapper.childAt(1);
    expect(paneContainer.type()).to.be.equals('div');
    expect(paneContainer.hasClass('tab-content')).to.be.true;
  });

  it('should render as many TabNavItems as TabPanes inside the navigation bar', () => {
    const wrapper = shallow(
      <TabsComponent>
        <TabPane name="foo">
          <span>Foo</span>
        </TabPane>
        <TabPane name="bar">
          <span>Bar</span>
        </TabPane>
      </TabsComponent>
    );

    const navBar = wrapper.childAt(0);
    expect(navBar.children().length).to.be.equals(2);
    expect(navBar.childAt(0).type()).to.be.equals(TabNavItem);
    expect(navBar.childAt(1).type()).to.be.equals(TabNavItem);
  });

  it('should render as many TabPanes as TabPanes childs it has', () => {
    const wrapper = shallow(
      <TabsComponent>
        <TabPane name="foo">
          <span>Foo</span>
        </TabPane>
        <TabPane name="bar">
          <span>Bar</span>
        </TabPane>
      </TabsComponent>
    );

    const paneContainer = wrapper.childAt(1);
    expect(paneContainer.children().length).to.be.equals(2);
    expect(paneContainer.childAt(0).type()).to.be.equals(TabPane);
    expect(paneContainer.childAt(1).type()).to.be.equals(TabPane);
  });

  it('should pass "selected" props to its TabNavItem childs pointing out if that TabPane is selected', () => {
    const wrapper = shallow(
      <TabsComponent selectedTab="foo">
        <TabPane name="foo">
          <span>Foo</span>
        </TabPane>
        <TabPane name="bar">
          <span>Foo</span>
        </TabPane>
      </TabsComponent>
    );

    const navBar = wrapper.childAt(0);
    expect(navBar.childAt(0).props().selected).to.be.true;
    expect(navBar.childAt(1).props().selected).to.be.false;
  });

  it('should pass "selected" props to its TabPanechilds pointing out if that TabPane is selected', () => {
    const wrapper = shallow(
      <TabsComponent selectedTab="foo">
        <TabPane name="foo">
          <span>Foo</span>
        </TabPane>
        <TabPane name="bar">
          <span>Foo</span>
        </TabPane>
      </TabsComponent>
    );

    const paneContainer = wrapper.childAt(0);
    expect(paneContainer.childAt(0).props().selected).to.be.true;
    expect(paneContainer.childAt(1).props().selected).to.be.false;
  });

  it('should pass "name" property to its TabPane childs', () => {
    const wrapper = shallow(
      <TabsComponent>
        <TabPane name="foo">
          <span>Foo</span>
        </TabPane>
        <TabPane name="bar">
          <span>Foo</span>
        </TabPane>
      </TabsComponent>
    );

    const paneContainer = wrapper.childAt(0);
    expect(paneContainer.childAt(0).props().name).to.be.equals('foo');
    expect(paneContainer.childAt(1).props().name).to.be.equals('bar');
  });

  it('should pass "animate" property to its TabPane childs', () => {
    const wrapper = shallow(
      <TabsComponent animate>
        <TabPane name="foo">
          <span>Foo</span>
        </TabPane>
        <TabPane name="bar">
          <span>Foo</span>
        </TabPane>
      </TabsComponent>
    );

    const paneContainer = wrapper.childAt(1);
    expect(paneContainer.childAt(0).props().animate).to.be.true;
    expect(paneContainer.childAt(1).props().animate).to.be.true;
  });

  it('should pass animate = "false" to its TabPane children by default', () => {
    const wrapper = shallow(
      <TabsComponent>
        <TabPane name="foo">
          <span>Foo</span>
        </TabPane>
      </TabsComponent>
    );

    const paneContainer = wrapper.childAt(1);
    expect(paneContainer.childAt(0).prop('animate')).to.be.false;
  });

  it('should change selectedTab when selectTab is called', () => {
    // Arrange
    const wrapper = shallow(<TabsComponent />);
    const expectedState = {
      selectedTab: 'foo',
      animate: false,
    };

    // Act
    wrapper.instance()['selectTab']('foo');

    // Assert
    expect(wrapper.instance().state).to.eqls(expectedState);
  });

  it('should change selectedTab when child TabNavItem triggers its "onClick" handler', () => {
    const wrapper = mount(
      <TabsComponent>
        <TabPane name="foo">
          <span>Foo</span>
        </TabPane>
      </TabsComponent>
    );

    wrapper.childAt(0).childAt(0).simulate('click');

    expect(wrapper.instance().state['selectedTab']).to.be.equals('foo');
  });

});
