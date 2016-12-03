import * as React from 'react';
import { TabPane } from './TabPane';
import { TabNavItem } from './TabNavItem';

interface Props {
  children?: React.ReactNode[];
  selectedTab?: string;
  animate?: boolean;
}

interface State {
  selectedTab: string;
  animate?: boolean;
}


export class TabsComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedTab: props.selectedTab || null,
      animate: !!props.animate,
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(selectedTab: string) {
    this.setState({
      ...this.state,
      selectedTab,
    });
  }

  render() {
    let navigationItems = [];
    let tabPaneItems = [];

    // TODO: need more research about child typing...
    React.Children.forEach(this.props.children, (child: React.ReactElement<any>, index) => {
      const {name} = child.props;
      const selected = name === this.state.selectedTab;
      navigationItems.push(<TabNavItem onClick={this.onSelect} key={index} name={name} selected={selected} />);
      tabPaneItems.push(
        <TabPane key={index} animate={this.state.animate} name={name} selected={selected}>
          {child.props.children}
        </TabPane>
      );
    });

    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          {navigationItems}
        </ul>
        <div className="tab-content">
          {tabPaneItems}
        </div>
      </div>
    );
  }
}
