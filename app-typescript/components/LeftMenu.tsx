import * as React from 'react';
import classNames from 'classnames';

interface IMenuItem {
    id: string;
    label: string;
    route?: string;
}

interface IMenuGroup {
    label: string;
    items: Array<IMenuItem>;
}

interface IMenu {
    className?: string;
    groups: Array<IMenuGroup>;
    activeItemId: string;
    ariaLabel?: string;
    style?: 'default' | 'inverse' | 'blanc';
    onSelect(id: string, route: string): void;
}

interface IState {
    active: string;
}
export class LeftMenu extends React.PureComponent<IMenu, IState> {
    constructor(props: IMenu) {
        super(props);

        this.state = {
            active: '',
        };
    }

    handleClick(id: string, route: string) {
        this.setState({
            active: id,
        });
        this.props.onSelect(id, route);
    }

    render() {
        let classes = classNames('sd-left-nav', {
            'sd-left-nav--default': this.props.style === undefined,
            [`sd-left-nav--${this.props.style}`]: this.props.style || this.props.style !== undefined,
        }, this.props.className);

        return (
            <nav className={classes} aria-label={this.props.ariaLabel}>
                {this.props.groups.map((group, i) => {
                    return (
                        <React.Fragment key={i}>
                            <span className='sd-left-nav__group-header'>{group.label}</span>
                            {group.items.map((item, j) => {
                                return (
                                    <button
                                        key={j}
                                        onClick={() => {
                                            this.handleClick(item.id, item.route ? item.route : '');
                                        }}
                                        className={item.id === this.state.active ? 'sd-left-nav__btn sd-left-nav__btn--active' : 'sd-left-nav__btn'}>
                                        {item.label}
                                    </button>
                                );
                            })}
                        </React.Fragment>
                    );
                })}
            </nav>
        );
    }
}
