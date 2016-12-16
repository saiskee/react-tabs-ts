import * as React from 'react';

interface Props {
  selected: boolean;
  name: string;
  onClick: () => void;
  disabled: boolean;
}

export const TabNavItem: React.StatelessComponent<Props> = (props) => (
  <li
    role="presentation"
    className={getClassNames(props)}
    onClick={(e) => props.onClick()}>
    <a
      href="#"
      aria-controls={props.name}
      aria-selected={props.selected}
      role="tab"
      data-toggle="tab"
      onClick={(e) => e.preventDefault()}>
      {props.name}
    </a>
  </li >
);

TabNavItem.propTypes = {
  selected: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool.isRequired,
};

const getClassNames = (props: Props): string => {
  let classNames = [];

  if (props.selected) {
    classNames = [...classNames, 'active'];
  }

  if (props.disabled) {
    classNames = [...classNames, 'disabled'];
  }

  return classNames.join(' ');
}
