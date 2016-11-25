import * as React from 'react';
import { ITabPane } from './TabPane';

interface Props {
  children?: React.ReactNode;
  selectedTab?: number;
}
export const TabContent: React.StatelessComponent<Props> = (props) => (
  <div className="tab-content">{getChildren(props)}</div>
);

function getChildren(props: Props) {
  const {children, selectedTab} = props;
  return React.Children.map(children, (child: React.ReactElement<any>, index) => {
    return React.cloneElement(child, {
      selectedTab: selectedTab === index,
      key: index,
    })
  });
}
