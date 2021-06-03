import React from 'react';

const PartialDescription = ({product}) => (
    <div className="ps-document">
       {product.productDescLarge}
    </div>
);

export default PartialDescription;
