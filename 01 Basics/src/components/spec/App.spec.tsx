import * as React from 'react';
import { } from 'mocha';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { App } from '../App';
import {
  TabsComponent,
  TabNavItem,
  TabPane,
} from '../tabs';

describe('<App /> tests', () => {
  it('should render root div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').first().hasClass('container')).to.be.true;
  });

  it('should render a TabComponent', () => {
    const wrapper = shallow(<App />);
    const rootElement = wrapper.find('div').first();
    expect(rootElement.childAt(0).type()).to.be.equals(TabsComponent);
  });

  it('should render five TabPanes', () => {
    const wrapper = shallow(<App />);
    const tabsComponent = wrapper.find('div').first().childAt(0);
    expect(tabsComponent.children().length).to.be.equal(5);

    expect(tabsComponent.childAt(0).type()).to.be.equals(TabPane);
    expect(tabsComponent.childAt(0).prop('name')).to.be.equals('Home');

    expect(tabsComponent.childAt(1).type()).to.be.equals(TabPane);
    expect(tabsComponent.childAt(1).prop('name')).to.be.equals('Profile');

    expect(tabsComponent.childAt(2).type()).to.be.equals(TabPane);
    expect(tabsComponent.childAt(2).children().length).to.be.equals(1);
    expect(tabsComponent.childAt(2).prop('name')).to.be.equals('Messages');

    expect(tabsComponent.childAt(3).type()).to.be.equals(TabPane);
    expect(tabsComponent.childAt(3).prop('name')).to.be.equals('Settings');

    expect(tabsComponent.childAt(4).type()).to.be.equals(TabPane);
    expect(tabsComponent.childAt(4).prop('name')).to.be.equals('About');
  });

  it('should render h1 inside TabPanes', () => {
    const wrapper = shallow(<App />);
    const tabsComponent = wrapper.find('div').first().childAt(0);

    expect(tabsComponent.childAt(0).children().length).to.be.equals(1);
    expect(tabsComponent.childAt(0).childAt(0).type()).to.be.equals('h1');
    expect(tabsComponent.childAt(0).childAt(0).hasClass('text-center')).to.be.true;
    expect(tabsComponent.childAt(0).childAt(0).text()).to.be.equals('Home Pane');

    expect(tabsComponent.childAt(1).children().length).to.be.equals(1);
    expect(tabsComponent.childAt(1).childAt(0).type()).to.be.equals('h1');
    expect(tabsComponent.childAt(1).childAt(0).hasClass('text-center')).to.be.true;
    expect(tabsComponent.childAt(1).childAt(0).text()).to.be.equals('Profile Pane');

    expect(tabsComponent.childAt(2).childAt(0).hasClass('text-center')).to.be.true;
    expect(tabsComponent.childAt(2).childAt(0).type()).to.be.equals('h1');
    expect(tabsComponent.childAt(2).childAt(0).text()).to.be.equals('Messages Pane');

    expect(tabsComponent.childAt(3).children().length).to.be.equals(1);
    expect(tabsComponent.childAt(3).childAt(0).type()).to.be.equals('h1');
    expect(tabsComponent.childAt(3).childAt(0).hasClass('text-center')).to.be.true;
    expect(tabsComponent.childAt(3).childAt(0).text()).to.be.equals('Settings Pane');

    expect(tabsComponent.childAt(4).children().length).to.be.equals(1);
    expect(tabsComponent.childAt(4).childAt(0).type()).to.be.equals('h1');
    expect(tabsComponent.childAt(4).childAt(0).hasClass('text-center')).to.be.true;
    expect(tabsComponent.childAt(4).childAt(0).text()).to.be.equals('About Pane');
  });
});
