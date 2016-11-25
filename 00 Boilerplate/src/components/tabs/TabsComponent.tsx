import * as React from 'react';
import { TabNavigation } from './TabNavigation';

interface Props {
  children?: React.ReactNode[];
  selectedTab?: number;
}

interface State {
  selectedTab: number;
}

export class TabsComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { selectedTab: props.selectedTab || 0 };

    this.onSelect = this.onSelect.bind(this);
  }

  private getChildren() {

    const childrenWithProps = React.Children.map(this.props.children, (child: React.ReactElement<any>, index) => {
      const attributes = {
        selectedTab: this.state.selectedTab,
      };

      if (child.type === TabNavigation) {
        attributes['onSelect'] = this.onSelect;
      }

      return React.cloneElement(child, attributes);
    });

    return childrenWithProps;
  }

  onSelect(selectedTab: number) {
    this.setState({ selectedTab });
  }

  render() {
    return (
      <div className="tab-content">{this.getChildren()}</div>
    );
  }
}
