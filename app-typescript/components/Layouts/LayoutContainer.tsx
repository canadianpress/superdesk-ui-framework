import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class LayoutContainer extends React.PureComponent<IProps> {
    render() {
        return (
            <div
                style={{height: '100%'}}
                className="sd-main-content-grid"
            >
                {this.props.children}
            </div>
        );
    }
}