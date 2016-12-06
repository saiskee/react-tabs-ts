import * as React from 'react';

interface Props {
  children?: React.ReactElement<any>[];
  name: string;
  selected?: boolean;
  animate?: boolean;
  disabled?: boolean;
}

export class TabPane extends React.Component<Props, {}> {
  private parentDiv: HTMLDivElement = null;
  constructor(props: Props) {
    super(props);
  }

  static propTypes = {
    children: React.PropTypes.object,
    name: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool,
    animate: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
  };

  componentDidMount() {
    console.log('Child mounted!');
    if (this.props.selected) {
      this.parentDiv.classList.add(...['active', 'in']);
    }
  }

  shouldComponentUpdate(previousProps: Props) {
    return previousProps.selected !== this.props.selected;
  }

  componentDidUpdate(previousProps) {
    if (this.props.animate) {
      this.doAsyncAnimation();
    } else {
      this.doAnimation();
    }
  }

  private doAnimation() {
    if (this.props.selected) {
      this.parentDiv.classList.add(...['active', 'in']);
    } else {
      this.parentDiv.classList.remove(...['active', 'in']);
    }
  }

  private doAsyncAnimation() {
    if (this.props.selected) {
      setTimeout(() => {
        this.parentDiv.classList.add(...['active', 'in']);
      }, 150);
    } else {
      this.parentDiv.classList.remove('in');
      setTimeout(() => {
        this.parentDiv.classList.remove('active');
      }, 150);
    }
  }

  private getClassNames(): string {
    let classNames = ['tab-pane'];

    if (this.props.animate) {
      classNames = [...classNames, 'fade'];
    }

    return classNames.join(' ');
  }

  render() {
    return (
      <div
        ref={div => this.parentDiv = div}
        key={name}
        role="tabpanel"
        className={this.getClassNames()}
        >
        {this.props.children}
      </div>
    );
  }
}
