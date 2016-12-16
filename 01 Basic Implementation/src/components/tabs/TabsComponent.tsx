import * as React from 'react';
import { TabPane } from './TabPane';
import { TabNavItem } from './TabNavItem';

interface Props {
  children?: React.ReactElement<TabPane>[];
  selectedTab?: string;
  animate?: boolean;
  onSelect?: (...any) => any;
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

    this.selectTab = this.selectTab.bind(this);
  }

  static propTypes = {
    children: React.PropTypes.oneOfType(
      [
        React.PropTypes.shape({
          type: React.PropTypes.oneOf([TabPane]),
        }),
        React.PropTypes.arrayOf(
          React.PropTypes.shape({
            type: React.PropTypes.oneOf([TabPane]),
          })
        )
      ]
    ),
    selectedTab: React.PropTypes.string,
    animate: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
  };

  shouldComponentUpdate(previousProps: Props, previousState: State) {
    return this.state.selectedTab !== previousState.selectedTab;
  }

  selectTab(selectedTab: string) {
    this.setState({
      ...this.state,
      selectedTab,
    });
  }

  private getChildren() {
    let navigationItems = [];
    let tabPaneItems = [];

    // TODO: need more research about child typing...
    React.Children.forEach(this.props.children, (child: React.ReactElement<any>, index) => {
      const {name, disabled} = child.props;
      const selected = name === this.state.selectedTab;

      navigationItems = [
        ...navigationItems,
        <TabNavItem
          onClick={
            () => {
              if (!disabled) {
                this.selectTab(name);
                this.props.onSelect instanceof Function && this.props.onSelect(index);
              }
            }
          }
          key={index}
          name={name}
          disabled={!!disabled}
          selected={selected}
          />
      ];

      tabPaneItems = [
        ...tabPaneItems,
        <TabPane key={index} animate={!!this.props.animate} name={name} selected={selected}>
          {child.props.children}
        </TabPane>
      ];
    });

    return [navigationItems, tabPaneItems];
  }

  render() {
    const [navigationItems, tabPaneItems] = this.getChildren();
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
