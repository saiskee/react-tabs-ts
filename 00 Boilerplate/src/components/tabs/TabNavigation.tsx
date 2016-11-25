import * as React from 'react';

interface Props {
  children?: any;
  selectedTab?: number;
  onSelect?: (selectedTab: number) => void;
}

export const TabNavigation: React.StatelessComponent<Props> = (props) => (
  <ul className="nav nav-tabs" role="tablist">{getChildren(props)}</ul>
);

function getChildren(props: Props) {
  const {children, selectedTab, onSelect} = props;
  return React.Children.map(children, (child: React.ReactElement<any>, index) =>
    React.cloneElement(child, {
      onSelect,
      index,
      selectedTab: selectedTab === index,
    })
  );
}
