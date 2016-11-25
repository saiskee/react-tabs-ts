import * as React from 'react';

interface Props {
  children?: any;
  selectedTab?: boolean;
  fade?: boolean;
  key?: number;
}

export type ITabPane = React.StatelessComponent<Props>;
export const TabPane: ITabPane = (props) => {
  return (
    <div
      id={`tab-${props.key}`}
      aria-labelledby={`tab-${props.key}`}
      role="tabpanel"
      className={getClassName(props)}
      aria-hidden={!props.selectedTab}>
      {props.children}
    </div>
  );
};

function getClassName({selectedTab, fade}: Props): string {
  let classNames = ['tab-pane'];

  if (fade) {
    classNames = [...classNames, 'fade'];
  }

  if (selectedTab) {
    classNames = [...classNames, 'active', 'in'];
  }

  return classNames.join(' ');
}
