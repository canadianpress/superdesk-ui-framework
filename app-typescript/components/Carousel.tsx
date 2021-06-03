import * as React from 'react';
import { Carousel as PrimeCarousel } from '@superdesk/primereact/carousel';
import { Badge } from './Badge';

interface IImage {
    src: string;
    alt?: string;
}

interface IProps {
    images: Array<IImage>;
    title?: string;
    description?: string;
    /** total number of images in the gallery, fallback to images.length */
    imageCount?: number;
    /** header metadata section */
    headerMeta?: JSX.Element;
    id?: string;
    className?: string;
    theme?: string;
    numVisible?: number;
    numScroll?: number;
    page?: number;
    circular?: boolean;
    autoplayInterval?: number;
    responsiveOptions?: Array<IPropsResponsive>;
    onPageChange?(e: {page: number}): void;
}

interface IPropsResponsive {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
}

export class Carousel extends React.PureComponent<IProps, {}> {
    render() {

        const header = (
            <div className="sd-thumb-carousel__header">
                {this.props.title && (
                    <>
                        <h4 className="sd-thumb-carousel__heading">{this.props.title}</h4>
                        <Badge text={'' + (this.props.imageCount || this.props.images.length)} type='light' />
                    </>
                )}
                {this.props.headerMeta && (
                    <div className="sd-thumb-carousel__header-block--r">
                        {this.props.headerMeta}
                    </div>
                )}
            </div>
        );

        const footer = this.props.description ? (
            <div className="sd-thumb-carousel__description">
                {this.props.description}
            </div>
        ) : null;

        const itemTemplate = (props: IImage) => (
            <div className="sd-thumb-carousel__item">
                <div className="sd-thumb-carousel__item-inner">
                    <img src={props.src} alt={props.alt} />
                </div>
            </div>
        );

        return <div style={{display: 'content'}}
            data-theme={this.props.theme !== 'dark' ? '' : 'dark-ui' }
            className={this.props.className}>
            <PrimeCarousel
                id={this.props.id}
                value={this.props.images}
                numVisible={this.props.numVisible}
                numScroll={this.props.numScroll}
                responsiveOptions={this.props.responsiveOptions}
                itemTemplate={itemTemplate}
                header={header}
                footer={footer}
                indicatorsContentClassName='sd-thumb-carousel__indicators'
                onPageChange={this.props.onPageChange}
            />
        </div>;
    }
}
