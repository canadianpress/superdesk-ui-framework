import * as React from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';

interface IProps {
    type?: 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    style?: 'filled' | 'hollow'; // defaults to 'filled'
    size?: 'normal' | 'small'; // defaults to 'normal'
    restoreIcon?: 'info' | 'help'; // defaults to 'info'
    icon?: string;
    banner?: boolean;
    margin?: 'none' | 'small' | 'normal' | 'large';
}

interface IState {
    open: boolean;
}

export class Alert extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            open: true,
        };
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
        this.setState((state) => ({
            open: !state.open,
        }));
    }

    render() {
        let classesAlert = classNames('sd-alert', {
            'sd-alert--hollow': this.props.style === 'hollow',
            'sd-alert--small': this.props.size === 'small',
            [`sd-alert--${this.props.type}`]: this.props.type,
            [`sd-alert--${this.props.type}`]: this.props.type,
            'sd-alert--margin-normal': this.props.margin === undefined,
            [`sd-alert--margin-${this.props.margin}`]: this.props.margin,
            'sd-alert--hidden': !this.state.open,
            'sd-alert--banner-style': this.props.banner,
        });
        let classesInfoBtn = classNames('sd-alert__info-btn sd-shadow--z2', {
            [`sd-alert__info-btn--${this.props.type}`]: this.props.type,
            'sd-alert__info-btn--hidden': this.state.open,
        });

        return (
            <div className='sd-alert__container'>
                <div className={classesAlert}>
                    {this.props.icon ?
                        <span className="sd-alert__icon">
                            <Icon name={this.props.icon} /> 
                        </span>  : null
                    }
                    {this.props.restoreIcon ?
                        <button className='sd-alert__close' onClick={this.onToggle} aria-label="Close"></button> : null}
                        <span className="sd-alert__content">
                            {this.props.children}
                        </span>
                </div>
                {this.props.restoreIcon ?
                    <span className={classesInfoBtn} onClick={this.onToggle}>
                        <i className={this.props.restoreIcon === 'help' ? 'icon-help-large' : 'icon-info-large'}></i>
                    </span> : null
                }
            </div>
        );
    }
}
