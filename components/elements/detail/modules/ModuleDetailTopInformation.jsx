import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    let priceView;

    if (product.discountPercent>0) {
        priceView = (
            <h4 className="ps-product__price sale">
                <del className="mr-2">&{product.mrp}</del>$
                {product.unitPrice}
            </h4>
        );
    } else {
        priceView = <h4 className="ps-product__price">${product.mrp}</h4>;
    }
    return (
        <header>
            <h1>{product.productName}</h1>
            <div className="ps-product__meta">
                <p>
                    Brand:
                    <Link href="/shop">
                        <a className="ml-2 text-capitalize">{product.brandName}</a>
                    </Link>
                </p>
                <div className="ps-product__rating">
                    <Rating />
                    <span>{product.rating}</span>
                </div>
            </div>
            {priceView}
        </header>
    );
};

export default ModuleDetailTopInformation;
