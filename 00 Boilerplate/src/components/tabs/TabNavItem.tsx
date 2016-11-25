import * as React from 'react';

interface Props {
  href?: string;
  index?: number;
  children?: any;
  selectedTab?: boolean;
  onSelect?: (selectedTab: number) => void;
}
export const TabNavItem: React.StatelessComponent<Props> = (props) => (
  <li
    role="presentation"
    className={getClassName(props)}
    onClick={(e) => {
      e.preventDefault();
      props.onSelect(props.index);
    } }>
    <a href={`#${props.href}`} aria-controls={props.href} role="tab" data-toggle="tab">{props.children}</a>
  </li>
);

const onClick: React.EventHandler<React.MouseEvent<HTMLLIElement>> = (event) => {
  event.preventDefault();
};

function getClassName(props: Props): string {
  let classNames = [];
  const {selectedTab} = props;
  if (selectedTab) {
    classNames.push('active');
  }
  return classNames.join(' ');
}
