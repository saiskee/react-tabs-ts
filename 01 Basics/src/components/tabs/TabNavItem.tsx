import * as React from 'react';

interface Props {
  selected: boolean;
  name: string;
  onClick: (selectedTab: string) => any;
}

export const TabNavItem: React.StatelessComponent<Props> = (props) => (
  <li
    role="presentation"
    className={props.selected ? 'active' : ''}
    onClick={(e) => props.onClick(props.name)}>
    <a
      href="#"
      aria-controls={props.name}
      aria-selected={props.selected}
      role="tab"
      data-toggle="tab"
      onClick={(e) => e.preventDefault()}>
      {props.name}
    </a>
  </li>
);
